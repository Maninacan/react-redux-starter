import { combineEpics } from 'redux-observable'
import axios from 'axios'

import { deckOfCardsEpics } from './deckOfCardsApi'

export const AxiosAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000
});

export default combineEpics(...deckOfCardsEpics)
