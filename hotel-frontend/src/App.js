import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SearchComponent from './SearchComponent'
import MatchedHotels from './MatchedHotels'
import { inject, observer } from 'mobx-react';
import queryString from 'query-string'

@inject('Hotels')
@observer class App extends Component {

  constructor(props) {
    super(props);
    this.Hotels = this.props.Hotels;
  }

  render() {

    let searchfilter = queryString.stringify(this.Hotels.filters)

    return (
      
      <Router>
        <div>  
        <Link to={{ pathname: '/MatchedHotels', search: searchfilter}}> asdasd </Link>     
          <Route
            exact
            path="/"
            component={SearchComponent}
          />
          <Route
            path="/MatchedHotels"
            component={MatchedHotels}

          />
        </div>
      </Router>
    )
  }
}

export default App;