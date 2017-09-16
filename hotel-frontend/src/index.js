import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AppState from './stores/Appstate'
import MoreOptionSelectStore from './stores/MoreOptionSelectStore'
import AutocompleteStore from './stores/AutocompleteStore'
import {Provider} from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider  Hotel={AppState} MoreOptionSelectStore={MoreOptionSelectStore} AutocompleteStore ={AutocompleteStore}>
  <App/>
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();