import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';


const items1 = [
  <MenuItem key={0} value={0} primaryText="0 Children" />,
  <MenuItem key={1} value={1} primaryText="1 Children" />,
  <MenuItem key={2} value={2} primaryText="2 Children" />
];

const agearray =[
  <MenuItem key={0} value={0} primaryText="<1" />,
  <MenuItem key={1} value={1} primaryText="1" />,
  <MenuItem key={2} value={2} primaryText="2" />,
  <MenuItem key={3} value={3} primaryText="3" />,
  <MenuItem key={4} value={4} primaryText="4" />,
  <MenuItem key={5} value={5} primaryText="5" />,
  <MenuItem key={6} value={6} primaryText="6" />,
  <MenuItem key={7} value={7} primaryText="7" />,
  <MenuItem key={8} value={8} primaryText="8" />,
  <MenuItem key={9} value={9} primaryText="9" />,
  <MenuItem key={10} value={10} primaryText="10" />,
  <MenuItem key={11} value={11} primaryText="11" />
]

let item;

@inject('Hotel')
@observer
class RoomSelect extends Component {
  constructor(props) {
		super(props);
    this.Hotel = this.props.Hotel; 
    this.state = {
      Age1CopmFlag : false,
       Age2CopmFlag : false 
    }
  }

  handleadultsChange = (event,index, value) => {

    this.props.room.adults = value
      
    if (value === 3) {
      this.setState({
        Age1CopmFlag : false , 
        Age2CopmFlag : false
      })
      this.props.room.children = 0;
      return item = _.dropRight(items1, 1)
    }
    else if (value === 4) {
      this.setState({
        Age1CopmFlag : false , 
        Age2CopmFlag : false
      })
      this.props.room.children = 0;
      return item = _.dropRight(items1, 2)

    }
    else {
      this.setState({
        Age1CopmFlag : false , 
        Age2CopmFlag : false
      })
      this.props.room.children = 0;
      return item = items1
    }
  }
  
  handlechildrenChange = (event, index, value) => {

  this.props.room.children = value

  console.log(value)

  if(value === 0) {
    this.setState({
      Age1CopmFlag : false , 
      Age2CopmFlag : false
    })
  }

    if (value === 1) {
      this.setState({
        Age1CopmFlag : true , 
        Age2CopmFlag : false
      })
      
    }
    if (value === 2) { 
      this.setState({
        Age1CopmFlag : true , 
        Age2CopmFlag : true
      })
    }
   
  }

  render() {

    return (
      <div>
        <h4> Room {this.props.index + 1} </h4>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SelectField
            floatingLabelText="Adults (+12)"
            value={this.props.room.adults}
            onChange={this.handleadultsChange} >
            <MenuItem key={1} value={1} primaryText="1 Adult" />
            <MenuItem key={2} value={2} primaryText="2 Adults" />
            <MenuItem key={3} value={3} primaryText="3 Adults" />
            <MenuItem key={4} value={4} primaryText="4 Adults" />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SelectField
            floatingLabelText="Children (0-11)"
            value={this.props.room.children}
            onChange={this.handlechildrenChange} >
            {item}
          </SelectField>
        </MuiThemeProvider>

        {this.state.Age1CopmFlag ? ( 
        <div>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <SelectField
    floatingLabelText="Age of children"
    value={this.props.room.age1} 
    onChange={this.handleageofchildren=  (event, index, value) => { 
      this.props.room.age1 = value 
   }} >
   {agearray}
  </SelectField>
  </MuiThemeProvider> 
    </div> 
         ) : null }

         
        {this.state.Age2CopmFlag ? ( 
        <div>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <SelectField
    floatingLabelText="Age 2 of children"
    value={this.props.room.age2} 
    onChange={this.handleageofchildren=  (event, index, value) => { 
      this.props.room.age2 = value 
   }} >
   {agearray}
  </SelectField>
  </MuiThemeProvider> 
    </div> 
         ) : null }


      </div>
    );
  }
}

export default RoomSelect;