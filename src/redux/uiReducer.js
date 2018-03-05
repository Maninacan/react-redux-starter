/* @flow */

import { combineReducers } from 'redux'
import _fp from 'lodash/fp'

export const SET_SPLASH_SCREEN_PROGRESS = 'SPLASH_SCREEN_PROGRESS'
export const setSplashScreenProgressAction = (splashScreenProgress: Number) => {
  return (dispatch: Dispatch, getStore: Function) => {
    const progressSavedOnState = _fp.get('uiRdx.splashScreenProgress')(getStore())
    const isValidProgressValue = (
        Number.isInteger(progressSavedOnState)
        || splashScreenProgress === 0
      )
      && Number.isInteger(splashScreenProgress)
      && splashScreenProgress >= 0
      && splashScreenProgress <= 100

    if ( isValidProgressValue ) {
      dispatch({
        type: SET_SPLASH_SCREEN_PROGRESS,
        splashScreenProgress
      })
    }
  }
}

const initialState = {
  splashScreenProgress: null
}
function loginUiReducer(state: Object = initialState, action: Object) {
  switch (action.type) {
    case SET_SPLASH_SCREEN_PROGRESS:
      return {...state, splashScreenProgress: action.splashScreenProgress}
    default:
      return state
  }
}

export default combineReducers({
  login: loginUiReducer
})
