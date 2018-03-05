/* @flow */

import { createStore, applyMiddleware } from 'redux'
//import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'

import reducer from './redux/index'
//import rootEpic from './api'

const logger = createLogger({
  collapsed: true,
  diff: true
})

//const epicMiddleware = createEpicMiddleware(rootEpic)

export const history = createHistory()

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      //epicMiddleware,
      logger
    )
  )
)
