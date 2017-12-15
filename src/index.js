/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

import ErrorBoundary from './components/ErrorBoundary'
import App from './App'

import './index.css'
// import registerServiceWorker from './registerServiceWorker'

UIkit.use(Icons)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
)

/**
 * Service workers have many cool benefits, but require configuration on the server and will most-likely break in
 * Production even if it works fine in development (service workers are turned of for development) so comment this out
 * or remove it entirely if you don't intend to make it work in production. For more detailed info, see the "Making a
 * Progressive Web App" section in the README.md
 */
//registerServiceWorker();
