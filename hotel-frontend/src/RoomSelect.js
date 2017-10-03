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



let item, AgeComponent, age1Comp=false;

@inject('Hotel')
@observer
class RoomSelect extends Component {
  constructor(props) {
		super(props);
    this.Hotel = this.props.Hotel;

  }

  


  handleChange = (event,index, value) => {

    this.props.room.adults = value
      
    if (value === 3) {
      this.props.room.children = 0;
      AgeComponent = ''
      return item = _.dropRight(items1, 1)
    }
    else if (value === 4) {
      this.props.room.children = 0;
      AgeComponent = ''
      return item = _.dropRight(items1, 2)

    }
    else {
      this.props.room.children = 0;
      AgeComponent = ''
      return item = items1
    }

  }
  
  handleChange2 = (event, index, value) => {

  this.props.room.children = value

    if (value === 1) {

      

    }
    else if (value === 2) {

    }

    else {
      AgeComponent = null ;
    }
  }

  handleageofchildren = (event, index, value) => { 
    this.props.room.age1 = value
   }

  render() {

    return (
      <div>
        <h4> Room  </h4>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SelectField
            floatingLabelText="Adults (+12)"
            value={this.props.room.adults}
            onChange={this.handleChange} >
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
            onChange={this.handleChange2} >
            {item}
          </SelectField>
        </MuiThemeProvider>

     <MuiThemeProvider muiTheme={getMuiTheme()}>
     <SelectField
       floatingLabelText="Age of children"
       value={this.props.room.age1} 
       onChange={this.handleageofchildren} >
      {agearray}
   </SelectField>
   </MuiThemeProvider>

   <AgeComponent1 age={this.props.room}/>

      </div>
    );
  }
}

class  AgeComponent1 extends RoomSelect  {
  render() {
    console.log(this.props.age.age1)
    return ( 
        <div>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <SelectField
    floatingLabelText="Age of children"
    value={this.props.age.age1} 
    onChange={this.handleageofchildren=  (event, index, value) => { 
    this.props.age.age1 = value
   }} >
   {agearray}
  </SelectField>
  </MuiThemeProvider> 
    </div> 
         ) }
        }




// ******* Age Of Children 1 ********
// @inject('Hotel')
// @observer
// class AgeofChildren1 extends Component  {
//   constructor(props) {
// 		super(props);
//     this.Hotel = this.props.Hotel;
//   }
//   handleageofchildren1 = (event, index, value) => { 
//     this.props.age.age1 = value
//     console.log("age1 " + this.props.room.age1)
//    }
//   render() {
//     return (
//       <MuiThemeProvider muiTheme={getMuiTheme()}>
//         <SelectField
//           floatingLabelText="Age of children"
//           value={this.props.age.age1} 
//           onChange={this.handleageofchildren1} >
//          {agearray}
//         </SelectField>
//       </MuiThemeProvider>
//     );
//   }
// }

// ******* Age Of Children 2 ********
// @inject('Hotel')
// @observer
// class AgeofChildren2 extends Component  {
//   constructor(props) {
// 		super(props);
//     this.Hotel = this.props.Hotel;
  
//   }
//   handleageofchildren2 = (event, index, value) => { 
//     this.props.age.age2 = value
//     console.log("age2 " + this.props.room.age2)
//    }
//   render() {
//     return (
      
//     );
//   }
// }

export default RoomSelect;