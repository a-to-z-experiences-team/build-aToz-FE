import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {reducer} from './reducer'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, applyMiddleware(thunk,logger)
)

// ReactDOM.render(
// <Router>
//     <Provider store={store}>
//         <App />
//     </Provider>
// </Router>,
// document.getElementById('root')); 

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );