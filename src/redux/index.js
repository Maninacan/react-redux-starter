import { combineReducers } from 'redux'
import { routerReducer as routerRdx } from 'react-router-redux'
import authRdx from './authReducer'
import deckOfCardsRdx from './deckOfCardsReducer'

export default combineReducers({
  routerRdx,
  authRdx,
  deckOfCardsRdx
})
