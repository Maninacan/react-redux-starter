export const GET_DECK_OF_CARDS = 'GET_DECK_OF_CARDS'
export const getDeckOfCardsAction = () => {
  return (dispatch) => {
    dispatch({
      type: GET_DECK_OF_CARDS
    })
  }
}

export const GET_DECK_OF_CARDS_SUCCESS = 'GET_DECK_OF_CARDS_SUCCESS'
export const getDeckOfCardsSuccessAction = ({deck_id, remaining}) => {
  return dispatch => dispatch({
    type: GET_DECK_OF_CARDS_SUCCESS,
    deckId: deck_id,
    remaining
  })
}

export const GET_DECK_OF_CARDS_FAIL = 'GET_DECK_OF_CARDS_FAIL'
export const getDeckOfCardsFailAction = (getDeckOfCardsErrorMsg) => {
  return {
    type: GET_DECK_OF_CARDS_FAIL,
    getDeckOfCardsErrorMsg
  }
}

export const DRAW_A_CARD = 'DRAW_A_CARD'
export const drawACardAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DRAW_A_CARD,
      deckId: getState().deckOfCardsRdx.deckId
    })
  }
}

export const DRAW_A_CARD_SUCCESS = 'DRAW_A_CARD_SUCCESS'
export const drawACardSuccessAction = ({cards, remaining}) => {
  return {
    type: DRAW_A_CARD_SUCCESS,
    newCards: cards,
    remaining
  }
}

export const DRAW_A_CARD_FAIL = 'DRAW_A_CARD_FAIL'
export const drawACardFailAction = (drawACardErrorMsg) => {
  return {
    type: DRAW_A_CARD_FAIL,
    drawACardErrorMsg
  }
}

const initialState = {
  deckId: null,
  remaining: null,
  cards: []
}
const deckOfCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DECK_OF_CARDS:
      return {...state, getDeckOfCardsPending: true}
    case GET_DECK_OF_CARDS_SUCCESS: {
      const newState = {...state, deckId: action.deckId, remaining: action.remaining}
      delete newState.getDeckOfCardsPending
      delete newState.getDeckOfCardsErrorMsg
      return newState
    }
    case GET_DECK_OF_CARDS_FAIL: {
      const newState = {...state, getDeckOfCardsErrorMsg: action.getDeckOfCardsErrorMsg}
      delete newState.getDeckOfCardsPending
      return newState
    }
    case DRAW_A_CARD:
      return {...state, drawACardPending: true}
    case DRAW_A_CARD_SUCCESS: {
      const newState = {...state, cards: [...state.cards, ...action.newCards], remaining: action.remaining}
      delete newState.drawACardPending
      delete newState.drawACardErrorMsg
      return newState
    }
    case DRAW_A_CARD_FAIL: {
      const newState = {...state, drawACardErrorMsg: action.drawACardErrorMsg}
      delete newState.drawACardPending
      return newState
    }
    default:
      return state
  }
}

export default deckOfCardsReducer
