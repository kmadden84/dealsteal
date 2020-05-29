import historyReducer from './historyState';
import searchReducer from './searchState';
import priceReducer from './priceState';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
  search: searchReducer,
  history: historyReducer,
  prices: priceReducer
})

export default allReducers;