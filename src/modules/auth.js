import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop'
import { fetchConfig } from '../utils/fetchUtils'
import { fetchFromStorage, clearStorage, persist } from '../utils/localStorage'
import { getHost } from '../utils/network'

const signup = ({ username, phone_number, password }, onSuccess = () => {}) =>
  fetch('https://firehelp-api-staging.herokuapp.com/auth/register', {
    method: 'post', body: JSON.stringify({ username, phone_number, password }),
    headers: fetchConfig(),
  })
  .then(res =>
    res.json().then(json => Object.assign({}, json, { status: res.status }))
  )
  .then(data => {
    if (data.status >= 200 && data.status < 299) { onSuccess(data) }
    return data
  })

const login = ({ login, password }, onSuccess) =>
  fetch(`${getHost()}/auth/login`, {
    method: 'post', body: JSON.stringify({ login, password }),
    headers: fetchConfig(),
  })
  .then(res => {
    if (!res.ok) {
      throw res;
    } else {
      return res.json();
    }
  })
  .then(data => {
    onSuccess(data)
    return { data, status: 'success' }
  })
  .catch(res => res.json().then(err => ({ errors: err.error, status: 'failure' })))

const verifyPhone = ({ userId, pin }, onSuccess = () => {}) =>
  fetch(`${getHost()}/users/${userId}/verify`, {
    method: 'post', body: JSON.stringify({ pin }),
    headers: fetchConfig(),
  })
  .then(res => res.json())
  .then(data => {
    onSuccess(data)
    return data
  })

const resendVerification = ({ userId }, onSuccess = () => {}) =>
  fetch(`${getHost()}/users/${userId}/resend_verification`, {
    method: 'post',
    headers: fetchConfig(),
  })
  .then(res => res.json())
  .then(data => {
    onSuccess(data)
    return data
  })

const formatErrors = errors =>
  Object
    .keys(errors)
    .reduce((acc, attribute) => {
      return {
        ...acc,
        [attribute]: { label: `${attribute} ${errors[attribute][0]}` }
      }
    }, {})

const authModule = createModule({
  name: 'auth',
  initialState: {
    loading: false,
    loggedIn: false,
    accessToken: '',
    user: {},
    errors: {},
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
      let newState = payload || {};
      newState.loading = false
      // TODO: Check for expiration here
      if (newState.accessToken) {
        newState.loggedIn = true
      }
      return Object.assign({}, state, newState)
    },
    signup: (state, { payload, meta }) => {
      return [
        Object.assign({}, state, { loading: true, signupErrors: false }),
        Cmd.run(signup, {
          successActionCreator: (result) => {
              let sideEffects;

              if (result.status >= 400) {
                return authModule.actions.signupError(result)
              }

              return authModule.actions.login({
              login: payload.username,
              password: payload.password
            }, meta)
          },
          failActionCreator: authModule.actions.signupError,
          args: [payload]
        })
      ];
    },
    signupError: (state, { payload: { status, ...errors } }) =>
      Object.assign({}, state, { loading: false, signupErrors: formatErrors(errors) }),
    login: (state, { payload, meta }) => [
      Object.assign({}, state, { loading: true, loginErrors: false, errors: {} }),
      Cmd.run(login, {
        successActionCreator: authModule.actions.loginSuccess,
        failActionCreator: authModule.actions.loginError,
        args: [payload, meta.onSuccess]
      })
    ],
    loginSuccess: (state, { payload }) => {
      payload.status === 'success' && persist(['auth'], { accessToken: payload.data.access_token, user: payload.data.user })
      return payload.status === 'success'
        ? Object.assign({}, state, {
            loading: false,
            loggedIn: !!payload.data.access_token,
            accessToken: payload.data.access_token,
            user: payload.data.user
          })
        : Object.assign({}, state, { loading: false, errors: payload.errors })
    },
    loginError: (state, { payload }) =>
      Object.assign({}, state, { loading: false, loginErrors: payload }),
    logout: (state, { payload }) => [
      Object.assign({}, state, { loggedIn: false, accessToken: '', user: {} }),
      Cmd.run(clearStorage, {
        successActionCreator: authModule.noop,
        failActionCreator: authModule.noop,
        args: ['auth']
      })
    ],
    verifyPhone: (state, { payload, meta = {} }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(verifyPhone, {
        successActionCreator: authModule.actions.verifyPhoneSuccess,
        failActionCreator: authModule.actions.verifyPhoneError,
        args: [{ userId: state.user.id, pin: payload }, meta.onSuccess]
      })
    ],
    verifyPhoneSuccess: (state, { payload }) => [
      Object.assign({}, state, { loading: false,  user: { ...state.user, verified: true } }),
      Cmd.run(persist, {
        successActionCreator: authModule.noop,
        failActionCreator: authModule.noop,
        args: ['auth', { accessToken: state.accessToken, user: { ...state.user, verified: true } }]
      })
    ],
    verifyPhoneError: (state, { payload }) =>
      Object.assign({}, state, { loading: false }),
    resendVerification: (state, { payload, meta = {} }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(resendVerification, {
        successActionCreator: authModule.actions.resendVerificationSuccess,
        failActionCreator: authModule.actions.resendVerificationError,
        args: [{ userId: state.user.id, pin: payload }, meta.onSuccess]
      })
    ],
    resendVerificationSuccess: (state, { payload }) =>
      Object.assign({}, state, { loading: false }),
    resendVerificationError: (state, { payload }) =>
      Object.assign({}, state, { loading: false }),
    noop: s => s,
  }
})

export default authModule
