import {createActions, handleActions} from 'redux-actions'

export const GET_DECK_OF_CARDS = 'GET_DECK_OF_CARDS'
export const DRAW_A_CARD = 'DRAW_A_CARD'
export const {
  getDeckOfCards, getDeckOfCardsSuccess, getDeckOfCardsFail,
  drawACard, drawACardSuccess, drawACardFail
} = createActions({
  GET_DECK_OF_CARDS: () => {},
  GET_DECK_OF_CARDS_SUCCESS: ({deck_id, remaining}) => ({deckId: deck_id, remaining}),
  GET_DECK_OF_CARDS_FAIL: (getDeckOfCardsErrorMsg) => ({getDeckOfCardsErrorMsg}),
  DRAW_A_CARD: (deckId) => ({deckId}),
  DRAW_A_CARD_SUCCESS: ({cards, remaining}) => ({cards, remaining}),
  DRAW_A_CARD_FAIL: (drawACardErrorMsg) => ({drawACardErrorMsg})
})

const defaultState = {
  deckId: null,
  remaining: null,
  cards: []
}
export default handleActions({
  GET_DECK_OF_CARDS: (state) => ({
    ...state, getDeckOfCardsPending: true, getDeckOfCardsErrorMsg: null
  }),
  GET_DECK_OF_CARDS_SUCCESS: (state, {payload: {deckId, remaining}}) => ({
    ...state, deckId, remaining, getDeckOfCardsPending: false
  }),
  GET_DECK_OF_CARDS_FAIL: (state, {payload: {getDeckOfCardsErrorMsg}}) => ({
    ...state, getDeckOfCardsErrorMsg, getDeckOfCardsPending: false
  }),
  DRAW_A_CARD: (state) => ({
    ...state, drawACardPending: true, drawACardErrorMsg: null
  }),
  DRAW_A_CARD_SUCCESS: (state, {payload: {cards, remaining}}) => {
    return {...state, cards: [...state.cards, ...cards], remaining, drawACardPending: false}
  },
  DRAW_A_CARD_FAIL: (state, {payload: {drawACardErrorMsg}}) => ({
    ...state, drawACardErrorMsg
  })
}, defaultState);
