import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getDeckOfCards, drawACard } from '../redux/deckOfCardsReducer'
import Loading from './Loading'

const CardTable = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #1A4A1C, #308834 600px);
  color: white;
  padding: 20px;
`

class DeckOfCardsDemo extends PureComponent {
  constructor (props) {
    super(props)

    this.props.getDeckOfCards()
  }

  render () {
    return (
      <CardTable>
        <h1 style={{color: 'inherit'}}>Deck of Cards Demo</h1>
        <p>This demo was made using <a href='https://deckofcardsapi.com/' target='_blank' rel='noopener noreferrer' style={{color: 'orange'}}>https://deckofcardsapi.com/</a> and shows how to make a REST request via Redux, Redux-React, Redux-Observable, and Axios. The significant parts are found in the follow 3 files</p>
        <span style={{color: 'orange'}}>src/components/DeckOfCardsDemo.js</span>
        <span style={{color: 'orange'}}>src/redux/deckOfCardsReducer.js</span>
        <span style={{color: 'orange'}}>src/api/deckOfCardsApi.js</span>
        <p>To completely remove this demo from the project, delete the above 3 files and all references to them.</p>
        {
          this.props.deckOfCardsRdx.deckId
            ? (<button className={`uk-button uk-button-default ${this.props.deckOfCardsRdx.remaining ? '' : 'uk-disabled'}`} style={{color: 'white', width: 200, alignSelf: 'center', opacity: this.props.deckOfCardsRdx.remaining ? 1 : 0.5}} onClick={() => this.props.drawACard(this.props.deckOfCardsRdx.deckId)}>{this.props.deckOfCardsRdx.remaining ? 'Draw 2 Cards' : 'No more cards'}</button>)
            : (<Loading />)
        }
        <h3 style={{color: 'inherit'}}>Cards Remaining: {this.props.deckOfCardsRdx.remaining}</h3>
        <div>
          {
            this.props.deckOfCardsRdx.cards.map((card) => <img key={`${card.value} of ${card.suit}`} src={card.image} alt={`${card.value} of ${card.suit}`} style={{height: 120}}/>)
          }
        </div>
      </CardTable>
    )
  }
}

function mapStateToProps ({deckOfCardsRdx}) {
  return { deckOfCardsRdx }
}

function mapDispatchToProps (dispatch) {
  return {
    getDeckOfCards: () => dispatch(getDeckOfCards()),
    drawACard: (deckId) => dispatch(drawACard(deckId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckOfCardsDemo)
