/* @flow */
// DO NOT COPY THIS ENTIRE FILE INTO A NEW COMPONENT. This file is meant to be an example of some of the options
// available to you while building your component. It is highly unlikely that you will need EVERYTHING in this file for
// any given component.

// Credit to https://devhints.io/react - much of the content of this file was copied from devhints.io

// The lifecycle methods below are labeled with "Mounting phase" or "Updating phase"

// For the "Mounting phase":
// Set initial the state on constructor(). Add DOM event handlers, timers (etc) on componentDidMount(), then remove them
// on componentWillUnmount().

// For the "Updating phase":
// These methods are called when parents change properties and .setState(). These are not called for initial renders.

import React, {PureComponent} from 'react'

type Props = {}
type State = {}

class ContainerComponent extends PureComponent<Props, State> {
  static defaultProps = {
    myProp: []  // Defaults to empty array if no value is provided for this prop
  }

  // Mounting phase
  constructor(props: Props) {
    super(props)

    // Set the default state of the component
    this.state = {
      someKey: 'some value'
    }
  }

  // Mounting phase
  componentWillMount () {

  }

  // Updating phase
  componentWillReceiveProps (newProps: Props) {

  }

  // Updating phase
  shouldComponentUpdate (newProps: Props, newState: State) {
    // This lifecycle method should be used sparingly.  React is very good at making this decision for you so only use
    // this if you know you need it.  Using it unnecessarily will most likely create an unnecessary drag on performance
    // as well as additional code complexity.
    return true // or false
  }

  // Updating phase
  componentWillUpdate (newProps: Props, newState: State) {

  }

  // Mounting phase AND Updating phase
  render () {
    return (
      <div className='ContainerComponent'>
        <button onClick={this.handleClick}>Click Me</button>  {/* Notice no need for .bind(this) on the handleClick method. See the below "handleCLick" example*/}
      </div>
    )
  }

  // Mounting phase
  componentDidMount () {

  }

  // Updating phase
  componentDidUpdate (prevProps: Props, prevState: Props) {

  }

  // Mounting phase
  componentWillUnmount () {

  }

  // Mounting phase
  componentDidCatch (error: Error, info: Object) {

  }

  // This syntax removes the need to bind "this" to the handleClick method
  handleClick = (e: Event) => {
    // handle the click here
  }
}

export default ContainerComponent
