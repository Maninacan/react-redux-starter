import React from 'react'
import styled from 'styled-components'

import DeckOfCardsDemo from './DeckOfCardsDemo'

const DeckOfCardsDemoContainer = styled.div`
  padding: 20px 50px;
`

const Main = () => (
  <div>
    Main Component
    <DeckOfCardsDemoContainer>
      <DeckOfCardsDemo/>
    </DeckOfCardsDemoContainer>
  </div>
)

export default Main
