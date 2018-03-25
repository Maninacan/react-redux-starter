import store from '../store'

export function isAuthenticated () {
  const state = store.getState()
  if (!state.authRdx.jwt || !state.authRdx.user) {
    const jwt = sessionStorage.getItem('jwt')
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (jwt && user) {
      store.dispatch(verifyLoginAction(jwt, user))
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

export const CLEAR_AUTH_ERRORS = 'CLEAR_AUTH_ERRORS'
export const clearAuthErrorsAction = () => {
  return dispatch => dispatch({
    type: CLEAR_AUTH_ERRORS
  })
}

export const VERIFY_LOGIN = 'VERIFY_LOGIN'
export const verifyLoginAction = (jwt, user) => {
  return dispatch => dispatch({
    type: VERIFY_LOGIN,
    jwt,
    user
  })
}

export const LOGIN = 'LOGIN'
export const loginAction = (email, password) => {
  return dispatch => dispatch({
    type: LOGIN,
    email,
    password
  })
}

export const LOGIN_FULFILLED = 'LOGIN_FULFILLED'
export const loginFulfilledAction = ({jwt, user}) => {
  return dispatch => {
    sessionStorage.setItem('jwt', jwt)
    sessionStorage.setItem('user', JSON.stringify(user))
    store.dispatch(clearAuthErrorsAction())
    dispatch({
      type: LOGIN_FULFILLED,
      jwt,
      user
    })
  }
}

export const LOGIN_FAILED = 'LOGIN_FAILED'
export const loginFailedAction = (errorMsg) => {
  return dispatch => dispatch({
    type: LOGIN_FAILED,
    errorMsg
  })
}

export const LOGOUT = 'LOGOUT'
export const logoutAction = () => {
  return dispatch => {
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('user')
    dispatch({
      type: LOGOUT
    })
  }
}

export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED'
export const logoutFulfilledAction = ({logoutStatus}) => {
  return dispatch => dispatch({
    type: LOGOUT_FULFILLED,
    logoutStatus
  })
}

export const LOGOUT_FAILED = 'LOGOUT_FAILED'
export const logoutFailedAction = (errorMsg) => {
  return dispatch => dispatch({
    type: LOGOUT_FAILED,
    errorMsg
  })
}

const initialState = {
  jwt: null,
  user: null,
  loginPending: false,
  loginError: false,
  loginErrorMsg: '',
  logoutPending: false,
  logoutError: false,
  logoutErrorMsg: ''
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, loginPending: true, jwt: null}

    case VERIFY_LOGIN:
    case LOGIN_FULFILLED:
      return {...state, loginPending: false, jwt: action.jwt, user: action.user}

    case LOGIN_FAILED:
      return {...state, loginPending: false, loginError: true, loginErrorMsg: action.errorMsg.message}

    case LOGOUT:
      return {...state, jwt: null, user: {}}

    case LOGOUT_FULFILLED:
      return {...state, logoutPending: false, status: action.status}

    case LOGOUT_FAILED:
      return {...state, logoutPending: false, logoutError: true, logoutErrorMsg: action.errorMsg.message}

    default:
      return state
  }
}

export default authReducer
