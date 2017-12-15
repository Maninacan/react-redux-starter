import { Observable } from 'rxjs'

/**
 * The handleRequest function applies the redux-observable library middleware implemented in store.js.
 * To learn more see https://redux-observable.js.org/
 * @param action$
 * @param actionType
 * @param successAction
 * @param failAction
 * @param request
 * @returns {Observable<any>}
 */
export function handleRequest(action$, actionType, successAction, failAction, request) {
  return action$
    .ofType(actionType)
    .switchMap(
      (action) => {
        return Observable
          .fromPromise(request(action))
          .map(successAction)
          .catch((error) => Observable.of(failAction(error)))
      }
    )
}
