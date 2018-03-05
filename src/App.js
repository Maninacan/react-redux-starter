/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Main from './components/Main'
import NotFound from './components/NotFound'

class App extends React.PureComponent {
  render () {
    const {loginPending, authCheckPending, match} = this.props
    return (
      <div className='App' style={{filter: loginPending || authCheckPending ? 'blur(3px)' : 'blur(0px)'}}>
        <Switch>
          <ProtectedRoute exact path={`${match.path}`} component={Main}/>
          <ProtectedRoute exact path={`${match.path}:uid`} component={Main}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps ({authRdx}) {
  const {loginPending, authCheckPending} = authRdx
  return {
    loginPending,
    authCheckPending
  }
}

function mapDispatchToProps () {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
