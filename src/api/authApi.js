import axios from 'axios'
import {
  LOGIN,
  loginFulfilledAction,
  loginFailedAction,
  LOGOUT,
  logoutFulfilledAction,
  logoutFailedAction
} from '../redux/authReducer'
import { handleRequest } from './apiUtils'

function loginEpic (action$) {
  return handleRequest(action$, LOGIN, loginFulfilledAction, loginFailedAction, ({email, password}) => {
    return axios
      .post(
        `${process.env.REACT_APP_API}/v1/knock/auth_token`,
        {auth: {email, password}},
        {contentType: 'application/json'}
      )
      .then(({data}) => {
        data.user = {email}
        return data
      })
  })
}

function logoutEpic (action$) {
  return handleRequest(action$, LOGOUT, logoutFulfilledAction, logoutFailedAction, () => {
    // TODO: Handle logout request
    return Promise.resolve({logoutStatus: 'success'})
  })
}

export const authEpics = [loginEpic, logoutEpic]
