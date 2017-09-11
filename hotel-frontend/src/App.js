import React, { Component } from 'react';

import './App.css'
import MaterialUIAutocomplete from './MaterialUIAutocomplete'
import MaterialUIDatePicker from './MaterialUIDatePicker'
import MaterialUISelectField from './MaterialUISelectField'


class App extends Component {
  render() {
    return (
      <div className="App">
       <MaterialUIAutocomplete/>
       <MaterialUIDatePicker/>
      < MaterialUISelectField />
      </div>
    );
  }
}

export default App;