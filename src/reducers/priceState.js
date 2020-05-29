
let initialState = {
  prices: []
}

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'priceUpdate':
      return {
        ...state,
        prices: action.payload
      }
      default:
        return state
  }
}

export default priceReducer;