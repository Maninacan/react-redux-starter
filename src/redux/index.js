import { combineReducers } from 'redux'
import { routerReducer as routerRdx } from 'react-router-redux'

import authRdx from './authReducer'
import feedbackResponseRdx from './feedbackResponseReducer'
import uiRdx from './uiReducer'

export default combineReducers({
  routerRdx,
  authRdx,
  feedbackResponseRdx,
  uiRdx
})
