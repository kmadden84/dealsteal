
let initialState = {
  history: {}
}

const historyReducer = (state = "", action) => {
  switch (action.type) {
    case 'historyUpdate':
      return {
        ...state,
        history: action.payload
      }
      default:
        return state
  }
}

export default historyReducer;