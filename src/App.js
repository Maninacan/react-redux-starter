/* @flow */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Main from './components/Main'
import Login from './components/Login'
//import './App.css'

type Props = {}

/**
 * Component containing the entire app
 */
class App extends Component<Props> {
  render() {
    return (
      <div className='App'>
        <Switch>
          <ProtectedRoute exact path='/' component={Main}/>
          <Route exact path='/login' component={Login}/>
          <ProtectedRoute path='/simple' component={() => (<div>Other simple component</div>)}/>
          <ProtectedRoute path='*' shouldShowHeader={false} component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App
