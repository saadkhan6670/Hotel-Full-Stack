import React, {Component} from 'react';
import {AutoComplete, SelectField, MenuItem, FloatingActionButton, RaisedButton}   from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSearch from 'material-ui/svg-icons/content/filter-list';
import RoomSelect from './RoomSelect'
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { inject, observer } from 'mobx-react';

let content ;



@inject('Hotel')
@observer
class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      focusedInput : '',
      selected: false,
      value: 1
    }
  }


handleChangeSF = (event, index, value) => {this.setState({value});

let {  Hotel } = this.props

      if(value === 3 ){ 
        this.setState ({
          selected : true
         })
         console.log(Hotel)
         Hotel.rooms.push (<RoomSelect rooms={Hotel.HotelData}/>)

   }
   else {
     this.setState ({
      selected : false
     })
   }
    }
  
  render() {

    let {  Hotel } = this.props

    content = this.state.selected 
    ? Hotel.rooms.map((data) => {return data})
  : null;

    return  ( <div>
      
            {/* Autocomplete */}
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
      hintText="Search Destination"
        dataSource    = {Hotel.dataSource}
        onUpdateInput = {e => Hotel.onUpdateInputAC(e)}
        filter = {AutoComplete.caseInsensitiveFilter }/>
    </MuiThemeProvider> 

                 {/* DateRang */}
    <div>
    <DateRangePicker    
    startDate={Hotel.dates.checkIn} 
    endDate={Hotel.dates.checkOut} 
    onDatesChange= {({startDate, endDate}) => { Hotel.dates.checkIn = startDate;  Hotel.dates.checkOut =  endDate} }
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
           
                
            <div> 
              
              {/* Search button */}
          <MuiThemeProvider muiTheme={getMuiTheme()}>
          <RaisedButton label="Search "
          icon={<ContentSearch/>} 
          secondary={true} />
          </MuiThemeProvider>
          </div>
  </div>
    )
  }
}


class AddButton extends Component {
  render() {
    return(
    <div>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <FloatingActionButton 
    mini={true}
    onClick = { this.handelAdd } >
    <ContentAdd />
    </FloatingActionButton>
    </MuiThemeProvider>
    Add another room (4 max) 
    </div>)}
};



export default SearchComponent;