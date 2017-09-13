import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

class AgeofChildren extends Component {

  constructor() {
    super();
  
  this.state = { 
      selected: false,
      Adultvalue: 0,
      Childvalue: 0
};
}

handleChange = (event, index, value) => {this.setState({ Adultvalue : value });}

render() {
    return (
<MuiThemeProvider muiTheme={getMuiTheme()}>
        <SelectField
          floatingLabelText="Age of children"
          value={this.state.Adultvalue}
          onChange={this.handleageofchildren}
          >
          <MenuItem key={1} value={1} primaryText="< 1" />
          <MenuItem key={1} value={1} primaryText="2" />
          <MenuItem key={1} value={1} primaryText="< 1" />
          <MenuItem key={1} value={1} primaryText="< 1" />
        
        </SelectField>
        </MuiThemeProvider>
        );
    }
  }
export default AgeofChildren;