import React, {Component} from 'react';
import { AutoComplete}   from 'material-ui';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import axios              from 'axios';

const URL = 'http://localhost:5000/hotel/show-hotels/';


class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue: inputValue
    }, function() {
      self.performSearch();
    });
  }

  performSearch() {
    const
      self = this,
      url  = URL + this.state.inputValue;

    if(this.state.inputValue !== '') {
      axios.get(url)
        .then( (response) => {
        let searchResults, retrievedSearchTerms;

        searchResults = response.data;
     
        retrievedSearchTerms = searchResults.map(function(result) {
         return result.name;
         
        });

        self.setState({
          dataSource: retrievedSearchTerms
        });
    })
  }
}
  

  render() {
    return  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
        dataSource    = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInput}
        filter = {AutoComplete.caseInsensitiveFilter || AutoComplete.caseSensitiveFilter}/>
      </MuiThemeProvider> 
  }
}

export default MaterialUIAutocomplete;