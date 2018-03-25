import React, { PureComponent } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'

import Loading from './Loading'
import Login from './Login'
import ErrorBoundary from './ErrorBoundary'
import { isAuthenticated } from '../redux/authReducer'

class ProtectedRoute extends PureComponent {
  render () {
    const { component: Component, authRdx, ...rest } = this.props
    return (
      <ErrorBoundary>
        <Route {...rest} render={props => {
          if (isAuthenticated() || process.env.REACT_APP_OVERRIDE_LOGIN === 'true') {
            return <Component {...props}/>
          } else if (authRdx.loginPending) {
            return <Loading />
          } else {
            return <Login />
          }
        }}/>
      </ErrorBoundary>
    )
  }
}

function mapStateToProps ({authRdx}) {
  return {
    authRdx
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)
