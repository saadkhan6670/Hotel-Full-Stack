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

let content, roomcomponent

@inject('Hotel')
@observer
class SearchComponent extends Component {
  constructor(props) {
		super(props);
    this.Hotel = this.props.Hotel;
    this.state = {
            focusedInput : '',
            selected: false,
            flag: false,
            value: ''       
          }
}

handleChangeSF = (event, index, value) => {
  
  this.setState({value});

if(value ===  1 | value === 2 ) {
this.setState ({
     selected : false
    })
  }

if(value === 3 && this.state.flag === false){ 
  this.setState ({
    selected : true,
    flag: true
   })
   this.Hotel.addRoom()
}
    }
  render() {
    roomcomponent = this.Hotel.request.rooms.map(room =>{
      console.log(room)
       return  <RoomSelect room={room}/>
      } )
     
    content = this.state.selected 
    ? <div> {roomcomponent} <AddButton/> </div>
  : null;

    return  ( <div>
      
            {/* Autocomplete */}
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
      hintText="Search Destination"
        dataSource    = {this.Hotel.request.dataSource}
        onUpdateInput = {e =>  this.Hotel.onUpdateInputAC(e)}
        filter = {AutoComplete.caseInsensitiveFilter }/>
    </MuiThemeProvider> 

                 {/* DateRang */}
                 <div>
                 <DateRangePicker    
                 startDate={this.Hotel.request.dates.checkIn} 
                 endDate={this.Hotel.request.dates.checkOut} 
                 onDatesChange= {({startDate, endDate}) => { this.Hotel.request.dates.checkIn = startDate;  this.Hotel.request.dates.checkOut =  endDate} }
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

@inject('Hotel')
@observer class AddButton extends Component {
  constructor(props) {
		super(props);
    this.Hotel = this.props.Hotel;
    this.state = {
      focusedInput : '',
      select2 : false,

    }
  }
  
  handelAdd = () => {  
      this.setState ({
        selected2 : true
       })
       this.Hotel.addRoom()
  }
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