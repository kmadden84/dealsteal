import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

let initialState = {
  search: "",
  history: "",
  prices: ""
}

const store = createStore(
  allReducers,
  initialState,
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(<BrowserRouter><Provider store={store}><Route render={(props) =><App {...props}/>} /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
