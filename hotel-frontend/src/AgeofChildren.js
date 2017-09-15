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
      value: 0,
 
};
}

handleageofchildren = (event, index, value) => {this.setState({ value : value });}

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
export default AgeofChildren;