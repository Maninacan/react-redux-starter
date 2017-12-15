/* @flow */
import React from 'react'

type Props = {
  name: string
}

const PresentationalComponent = (props: Props) => (
  <div className='PresentationalComponent'>
    {props.name}
  </div>
)

export default PresentationalComponent
