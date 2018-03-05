/* @flow */

import { tethyrAxiosAPI } from './index'

export const createFeedbackResponseAPI = (feedbackRequestUid) => {
  return tethyrAxiosAPI
    .post(
      `${String(process.env.REACT_APP_TETHYR_API)}/v1/feedback_response`,
      {
        data: {
          type: 'feedback_response',
          attributes: {
            request_uid: feedbackRequestUid,
            recommended: true
          }
        }
      }, {
        contentType: 'application/json'
      }
    )
}
