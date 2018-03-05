/* @flow */

import { createActions, handleActions } from 'redux-actions'

export const { requestFacebookAuth, requestFacebookAuthSucceeded } = createActions({
  REQUEST_FACEBOOK_AUTH: () => {},
  REQUEST_FACEBOOK_AUTH_SUCCEEDED: (facebookAuthData) => ({facebookAuthData})
})

const defaultState = {}
export default handleActions({
  REQUEST_FACEBOOK_AUTH: (state) => ({...state, requestFacebookAuthPending: true}),
  REQUEST_FACEBOOK_AUTH_SUCCEEDED: (state, {payload: {facebookAuthData}}) => ({
    ...state, facebookAuthData, requestFacebookAuthPending: false
  })
}, defaultState)
