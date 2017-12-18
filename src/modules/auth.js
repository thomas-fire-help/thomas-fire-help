import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { fetchConfig } from '../utils/fetchUtils'

const clearStorage = (...args) => new Promise((resolve, reject) => {
  args.forEach(key => localStorage.setItem(key, null))
  resolve()
})

const persist = (...args) => new Promise((resolve, reject) => {
  args.forEach(toPersist => localStorage.setItem(toPersist.key, toPersist.value))
  resolve()
})

const login = ({ login, password }, onSuccess) =>
  fetch('https://firehelp-api-staging.herokuapp.com/auth/login', {
    method: 'post',
    body: JSON.stringify({ login, password }),
    headers: fetchConfig(),
  })
  .then(res => res.json())
  .then(data => {
    onSuccess(data)
    return data
  })

const authModule = createModule({
  name: 'auth',
  initialState: {
    loading: false,
    loggedIn: false,
    accessToken: '',
    user: {},
  },
  composes: [liftState],
  selector: s => s.auth,
  transformations: {
    init: state => state,
    login: (state, { payload, meta }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(login, {
        successActionCreator: authModule.actions.loginSuccess,
        failActionCreator: authModule.actions.loginError,
        args: [payload, meta.onSuccess  ]
      })
    ],
    loginSuccess: (state, { payload }) => [
      Object.assign({}, state, {
        loading: false,
        loggedIn: true,
        accessToken: payload.accessToken,
        user: payload.user
      }),
      Cmd.run(persist, {
        successActionCreator: authModule.noop,
        failActionCreator: authModule.noop,
        args: [
          { key: 'accessToken', value: payload.access_token },
          { key: 'user', value: payload.user },
        ]
      })
    ],
    loginError: (state, { payload }) =>
      Object.assign({}, state, { loading: false }),
    logout: (state, { payload }) => [
      Object.assign({}, state, { loggedIn: false, accessToken: '', user: {} }),
      Cmd.run(clearStorage, {
        successActionCreator: authModule.noop,
        failActionCreator: authModule.noop,
        args: ['accessToken', 'user']
      })
    ],
    noop: s => s,
  }
})

export default authModule
