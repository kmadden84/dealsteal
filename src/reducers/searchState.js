
let initialState = {
  search: {}
}
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchUpdate':
      return {
        ...state,
        search: action.payload
      }
      default:
        return state
  }
}

export default searchReducer;