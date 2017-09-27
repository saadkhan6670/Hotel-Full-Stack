import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './stores/Appstate'
import MoreOptionSelectStore from './stores/MoreOptionSelectStore'
import {Provider} from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider  Hotel={AppState} MoreOptionSelectStore={MoreOptionSelectStore}>
  <App/>
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();