// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './themeContext';
import './index.css';
import App from './App';
import Registration from './registration';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <Registration />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);