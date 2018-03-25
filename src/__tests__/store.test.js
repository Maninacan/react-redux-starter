import store from '../store'

describe('store', () => {
  it('should initialize', () => {
    const actual = store.getState()
    const expected = {
      routerRdx: {
        location: null
      }
    }

    expect(actual).toEqual(expected)
  })
})
