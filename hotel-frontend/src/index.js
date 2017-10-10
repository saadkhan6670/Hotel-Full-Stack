import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './stores/Appstate'
import {Provider} from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'

ReactDOM.render(
  <Provider  Hotel={AppState}>
  <App/>
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();