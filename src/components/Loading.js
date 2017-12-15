import React from 'react'

const Loading = () => (
  <div className='uk-flex-column uk-position-center'>
    <div style={{marginBottom: 15}}>Loading...</div>
    <div data-uk-spinner data-uk-icon="icon: spinner"/>
  </div>
)

export default Loading
