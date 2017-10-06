import React, {Component} from 'react';
import {AutoComplete, SelectField, MenuItem, FloatingActionButton, RaisedButton}   from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
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
            SFvalue: '',
            dataSource: [],
            addButtonDisable : false,
            clearButtonDisable : true

       }
}

handleUpdateInputAC = (value) => {

  this.props.Hotel.onUpdateInputAC(value)
  
}

handleChangeSF = (event, index, value) => {
  
  this.setState({SFvalue : value});

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

    handelClear= ()=> {

      if(this.Hotel.request.rooms.length === 2) {
    this.setState ({
      clearButtonDisable : true
     }) } 

     if(this.Hotel.request.rooms.length === 4) {
      this.setState ({
        addButtonDisable : false
       }) }
       console.log(this.Hotel.request.rooms.length)
      this.Hotel.request.rooms.pop()
    }
    
  render() {
    // ********** ClearButton Component
    let ClearButton = (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <FloatingActionButton 
      mini={true}
      onClick = {this.handelClear}
      disabled = {this.state.clearButtonDisable}>
      <ContentClear />
      </FloatingActionButton>
      </MuiThemeProvider>
      </div>)
      // ********** ClearButton Component end

       // ********** AddButton Component
    let AddButton = (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <FloatingActionButton 
      mini={true}
      onClick = { this.handelAdd =() => { 
        if(this.Hotel.request.rooms.length === 1) {
      this.setState ({
        clearButtonDisable : false
       }) } 
        if(this.Hotel.request.rooms.length === 3 ) 
      this.setState ({
        addButtonDisable : true
       })
       console.log(this.Hotel.request.rooms.length)
       this.Hotel.addRoom() } } 

      disabled = {this.state.addButtonDisable} >
      <ContentAdd />
      </FloatingActionButton>
      </MuiThemeProvider>
      Add another room (4 max) 
      </div>)
      // ********** AddButton Component end

      // ****** Component Mapping and passing it to RoomSelect file as a Prop
    roomcomponent = this.Hotel.request.rooms.map((room,index) =>{
       return  <RoomSelect key={index} room={room} index={index}/>
      } )


     // ****** Room Component and AddButton Checking flag
    content = this.state.selected 
    ? <div> {roomcomponent} {ClearButton} {AddButton} </div>
  : null;

  

    return  ( <div>
      
            {/* Autocomplete */}
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
      hintText="Search Destination"
        dataSource    = {this.Hotel.request.dataSource}
        onUpdateInput = { this.handleUpdateInputAC}
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
              value={this.state.SFvalue}
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

export default SearchComponent;