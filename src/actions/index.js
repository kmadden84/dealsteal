import $ from 'jquery';


export const search = (search) => dispatch => {
  fetch("http://localhost:5000/api/prices/search?term=" + search, {
    method: "GET",
    mode: "cors",
  })
    .then(res => res.json())
    .then(data => 
       dispatch({
          type: 'searchUpdate',
          payload: data.results
        })
    )
}

export const setHistory = (snaps) => {
  return {
    type: 'historyUpdate',
    payload: snaps
  }
}

export const setPrices = (prices) => {
  return {
    type: 'priceUpdate',
    payload: prices
  }
}


