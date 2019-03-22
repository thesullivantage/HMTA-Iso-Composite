import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const renderRouter = Component => {
    ReactDOM.hydrate(
      <BrowserRouter>
        <Component />
      </BrowserRouter>, document.getElementById('root')
    );
  };
  
  renderRouter(App);