/* @flow */

import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../store'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

type Props = {
  children: React.Node
}

export default class Wrapper extends React.PureComponent<Props> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {this.props.children}
        </ConnectedRouter>
      </Provider>
    )
  }
}
