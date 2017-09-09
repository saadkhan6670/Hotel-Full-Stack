import React, { Component } from 'react';

import './App.css'
import MaterialUIAutocomplete from './MaterialUIAutocomplete'
import MaterialUIDatePicker from './MaterialUIDatePicker'


class App extends Component {
  render() {
    return (
      <div className="App">
       <MaterialUIAutocomplete/>
       <MaterialUIDatePicker/>
      </div>
    );
  }
}

export default App;