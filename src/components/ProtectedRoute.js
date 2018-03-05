import React, { PureComponent } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'

import SplashScreen from './SplashScreen'
import Login from './Login'
import ErrorBoundary from './ErrorBoundary'

class ProtectedRoute extends PureComponent {
  render () {
    const { component: Component, authRdx, feedbackResponseRdx, ...rest } = this.props
    const {loginPending, authCheckPending, isAuth, isApiAuth} = authRdx
    const {createFeedbackResponseStatus} = feedbackResponseRdx
    return (
      <ErrorBoundary>
        <Route {...rest} render={props => {
          if (isAuth || process.env.REACT_APP_OVERRIDE_LOGIN === 'true') {
            return <Component {...props}/>
          } else if ((loginPending || authCheckPending || !createFeedbackResponseStatus) && !isApiAuth) {
            return <SplashScreen />
          } else {
            return <Login />
          }
        }}/>
      </ErrorBoundary>
    )
  }
}

function mapStateToProps ({authRdx, feedbackResponseRdx}) {
  return {
    authRdx,
    feedbackResponseRdx
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)