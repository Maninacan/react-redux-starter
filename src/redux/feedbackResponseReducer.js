/* @flow */

import { handleActions } from 'redux-actions'
import { createActionThunk } from 'redux-thunk-actions'

import { createFeedbackResponseAPI } from '../api/feedbackResponseApi'

export const createFeedbackResponse = createActionThunk('CREATE_FEEDBACK_RESPONSE', (feedbackRequestUID) => {
  return createFeedbackResponseAPI(feedbackRequestUID)
    .then(({data}) => {
      if (data === true) {
        return 'success'
      } else {
        throw Error('Aww shucks! The server was unable create a recommendation! We\'re super sorry! :-(')
      }
    })
})

const defaultState = {
  feedbackResponseStatus: null,
  feedbackResponsePending: false
}
export default handleActions({
  CREATE_FEEDBACK_RESPONSE_STARTED: (state) => ({
    ...state, feedbackResponsePending: true
  }),
  CREATE_FEEDBACK_RESPONSE_SUCCEEDED: (state, action) => ({
    ...state, feedbackResponseStatus: 'success'
  }),
  CREATE_FEEDBACK_RESPONSE_FAILED: (state, {error}) => ({
    ...state, error, feedbackResponseStatus: 'failed'
  }),
  CREATE_FEEDBACK_RESPONSE_ENDED: (state, action) => ({
    ...state, feedbackResponsePending: false
  })
}, defaultState)
