import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import { createStore } from './store';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/weather">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
