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

let item, age;

@inject('Hotel', 'MoreOptionSelectStore')
@observer
class RoomSelect extends Component {


  handleChange = (event, index, value) => {
    let { Hotel, MoreOptionSelectStore } = this.props;
    MoreOptionSelectStore.AdultvalueRoom1 = value
  console.log(Hotel.adults)
    if (value === 3) {
      MoreOptionSelectStore.ChildvalueRoom1 = 0;
      age = ''
      return item = _.dropRight(items1, 1)

    }
    else if (value === 4) {
      MoreOptionSelectStore.ChildvalueRoom1 = 0;
      age = ''
      return item = _.dropRight(items1, 2)

    }
    else {
      MoreOptionSelectStore.ChildvalueRoom1 = 0;
      age = ''
      return item = items1
    }

  }

  handleChange2 = (event, index, value) => {
    let { MoreOptionSelectStore } = this.props;

    MoreOptionSelectStore.ChildvalueRoom1 = value;
    if (value === 1) {

      age = <AgeofChildren />;
    }
    else if (value === 2) {

      age = <div> <AgeofChildren /> <AgeofChildren />  </div>;
    }

    else {
      age = '';
    }
  }

  render() {
    let { Hotel, MoreOptionSelectStore } = this.props;

    let content = Hotel.rooms.map((c, index) => { return })


    return (
      <div>
        <h4> Room {Hotel.rooms.map(room => {
          { room }
        })} </h4>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SelectField
            floatingLabelText="Adults (+12)"
            value={Hotel.adults}
            onChange={this.handleChange}
          >

            <MenuItem key={1} value={1} primaryText="1 Adult" />
            <MenuItem key={2} value={2} primaryText="2 Adults" />
            <MenuItem key={3} value={3} primaryText="3 Adults" />
            <MenuItem key={4} value={4} primaryText="4 Adults" />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <SelectField
            floatingLabelText="Children (0-11)"
            value={MoreOptionSelectStore.ChildvalueRoom1}
            onChange={this.handleChange2} >
            {item}

          </SelectField>
        </MuiThemeProvider>
        {age}

      </div>
    );
  }
}


// ******* Age Of Children ********

class AgeofChildren extends Component {

  constructor() {
    super();

    this.state = {
      selected: false,
      value: 0,
    };
  }

  handleageofchildren = (event, index, value) => { this.setState({ value: value }); }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <SelectField
          floatingLabelText="Age of children"
          value={this.state.value}
          onChange={this.handleageofchildren}
        >
          <MenuItem key={0} value={0} primaryText="< 1" />
          <MenuItem key={1} value={1} primaryText="1" />
          <MenuItem key={2} value={2} primaryText="2" />
          <MenuItem key={3} value={3} primaryText="3" />
          <MenuItem key={4} value={4} primaryText="4" />
          <MenuItem key={5} value={5} primaryText="5" />
          <MenuItem key={6} value={6} primaryText="6" />
          <MenuItem key={7} value={7} primaryText="7" />
          <MenuItem key={8} value={8} primaryText="8" />
          <MenuItem key={9} value={9} primaryText="9" />
          <MenuItem key={10} value={10} primaryText="10" />
          <MenuItem key={11} value={11} primaryText="11" />
        </SelectField>
      </MuiThemeProvider>
    );
  }
}
export default RoomSelect;