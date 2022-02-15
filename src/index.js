import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);