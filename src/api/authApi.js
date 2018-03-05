/* @flow */

import axios from 'axios'
import {
  REQUEST_API_AUTH,
  requestApiAuthSuccess,
  requestApiAuthFail
} from '../redux/authReducer'
import { handleRequest } from './apiUtils'
import type { ObservableAction, UserApiAuth } from '../customFlowTypes'

function userApiAuthEpic (action$: ObservableAction) {
  return handleRequest(action$, REQUEST_API_AUTH, requestApiAuthSuccess, requestApiAuthFail, (
    {
      facebookAuthData
    }: UserApiAuth
  ) => {
    //delete facebookAuthData.picture
    return axios
      .post(
        `${String(process.env.REACT_APP_TETHYR_API)}/v1/auth/facebook_user_token`,
        {
          data: {
            type: "user",
            attributes: {
              ...facebookAuthData
            }
          }
        },
        {contentType: 'application/json'}
      )
      //.then(({data}) => data)
  })
}

export default [
  userApiAuthEpic
]
