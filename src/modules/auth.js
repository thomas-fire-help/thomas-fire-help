import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { fetchConfig } from '../utils/fetchUtils'

const fetchFromStorage = (key) => new Promise((resolve, reject) => {
  let fromStorage = localStorage.getItem(key)
  resolve(JSON.parse(fromStorage))
})

const clearStorage = (...args) => new Promise((resolve, reject) => {
  args.forEach(key => localStorage.setItem(key, null))
  resolve()
})

const persist = (key, value) => new Promise((resolve, reject) => {
  localStorage.setItem(key, JSON.stringify(value))
  resolve(key)
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
    init: state => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(fetchFromStorage, {
        successActionCreator: authModule.actions.initSuccess,
        failActionCreator: authModule.actions.noop,
        args: ['auth'],
      })
    ],
    initSuccess: (state, { payload }) => {
      let newState = payload;
      newState.loading = false
      // TODO: Check for expiration here
      if (payload.accessToken) {
        newState.loggedIn = true
      }
      return Object.assign({}, state, newState)
    },
    login: (state, { payload, meta }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(login, {
        successActionCreator: authModule.actions.loginSuccess,
        failActionCreator: authModule.actions.loginError,
        args: [payload, meta.onSuccess]
      })
    ],
    loginSuccess: (state, { payload }) => [
      Object.assign({}, state, {
        loading: false,
        loggedIn: true,
        accessToken: payload.access_token,
        user: payload.user
      }),
      Cmd.run(persist, {
        successActionCreator: authModule.noop,
        failActionCreator: authModule.noop,
        args: ['auth', { accessToken: payload.access_token, user: payload.user }]
      })
    ],
    loginError: (state, { payload }) =>
      Object.assign({}, state, { loading: false }),
    logout: (state, { payload }) => [
      Object.assign({}, state, { loggedIn: false, accessToken: '', user: {} }),
      Cmd.run(clearStorage, {
        successActionCreator: authModule.noop,
        failActionCreator: authModule.noop,
        args: ['auth']
      })
    ],
    noop: s => s,
  }
})

export default authModule
