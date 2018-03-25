import axios from 'axios'
import {
  GET_DECK_OF_CARDS, getDeckOfCardsSuccess, getDeckOfCardsFail,
  DRAW_A_CARD, drawACardSuccess, drawACardFail
} from '../redux/deckOfCardsReducer'
import { handleRequest } from './apiUtils'

function getDeckOfCardsEpic(action$) {

  return handleRequest(action$, GET_DECK_OF_CARDS, getDeckOfCardsSuccess, getDeckOfCardsFail, () => {
    const url = process.env.REACT_APP_DECKOFCARDS_DOT_COM_API_DECK
    return axios.get(`${url}new/shuffle/?deck_count=1`)
      .then((response) => {
        return response.data
      })
  })
}

function drawACardEpic(action$) {
  return handleRequest(action$, DRAW_A_CARD, drawACardSuccess, drawACardFail, ({payload: {deckId}}) => {
    return axios.get(`${process.env.REACT_APP_DECKOFCARDS_DOT_COM_API_DECK}${deckId}/draw/?count=2`)
      .then((response) => {
        return response.data
      })
  })
}

export const deckOfCardsEpics = [getDeckOfCardsEpic, drawACardEpic]
