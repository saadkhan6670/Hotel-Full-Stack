import React, {Component} from 'react';
import {AutoComplete, SelectField, MenuItem, FloatingActionButton}   from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RoomSelect from './RoomSelect'
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import axios              from 'axios';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

let content ;
const URL = 'http://localhost:5000/hotel/show-hotels/';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInputAC = this.onUpdateInputAC.bind(this);
    this.state = {
      dataSource : [],
      inputValue : '',
      startDate : '',
      endDate : '',
      focusedInput : '',
      selected: false,
      value: 1
    }
  }

  onUpdateInputAC(inputValue) {
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

handleChangeSF = (event, index, value) => {this.setState({value});

      if(value === 3 ){
        this.setState({
          selected : true
        })
   }
   else {
     this.setState ({
      selected : false
     })
   }
    }
  
  render() {
    content = this.state.selected 
    ? <MoreOptionComponent/>
  : null;

    return  ( <div>
            {/* Autocomplete */}
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
      hintText="Search Destination"
        dataSource    = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInputAC}
        filter = {AutoComplete.caseInsensitiveFilter }/>
    </MuiThemeProvider> 

                 {/* DateRang */}
    <div>
    <DateRangePicker
    startDate={this.state.startDate} 
    endDate={this.state.endDate} 
    onDatesChange= {({ startDate, endDate }) => this.setState({ startDate, endDate })} 
    focusedInput={this.state.focusedInput} 
    onFocusChange={focusedInput => this.setState({ focusedInput })}
  />
  </div>
                    {/* SelectField */} 
              <MuiThemeProvider muiTheme={getMuiTheme()}>
              <SelectField
              floatingLabelText="Number of persons"
              value={this.state.value}
              onChange={this.handleChangeSF}  >
              <MenuItem value={1} primaryText="1 Room, 2 Adults, 0 Children" />
              <MenuItem value={2} primaryText="1 Room, 1 Adults, 0 Children" />
              <MenuItem value={3} primaryText="More Options" />
            </SelectField>
            </MuiThemeProvider>
                {content}

  </div>

    )
  }
}


const MoreOptionComponent = () => (
    <div>
    <RoomSelect/>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <FloatingActionButton 
    mini={true}
    onClick = { this.handelAdd }
    >
    <ContentAdd />
    </FloatingActionButton>
    </MuiThemeProvider>
    Add another room (4 max) 
    </div>
);

export default SearchComponent;