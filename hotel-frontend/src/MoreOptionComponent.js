import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
// import axios              from 'axios';

const items1 = [(
  <div>
  <MenuItem key={0} value={0} primaryText="0 Children" />
  <MenuItem key={1} value={1} primaryText="1 Children" />
  <MenuItem key={2} value={2} primaryText="2 Children" />
  </div>
)];

const items2 = [(
  <div>
  <MenuItem key={0} value={0} primaryText="0 Children" />
  <MenuItem key={1} value={1} primaryText="1 Children" />
  </div>
)];

const items3 = [(
  <div>
  <MenuItem key={0} value={0} primaryText="0 Children" />
  </div>
)];

let item ;

class MoreOptionComponent extends Component {

  constructor() {
    super();
  
  this.state = { 
      selected: false,
      Adultvalue: 0,
      Childvalue: 0
};
}

  handleChange = (event, index, value) => {this.setState({ Adultvalue : value });
  if(value === 3){
   return item = items2
  }
  else if(value === 4){
   return item = items3
  }
  else { 
   return item = items1
  }

 }

 handleChange2 = (event, index, value) => {this.setState({ Childvalue : value });
console.log ("Childvalue= " + value)}

      render() {
        return (
          <div> 
            <h3> Room 1 </h3>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <SelectField
              floatingLabelText="Adults (+12)"
              value={this.state.Adultvalue}
              onChange={this.handleChange}
              >
              <MenuItem key={1} value={1} primaryText="1 Adult" />
              <MenuItem key={2} value={2} primaryText="2 Adults" />
              <MenuItem key={3} value={3} primaryText="3 Adults" />
              <MenuItem key={4} value={4} primaryText="4 Adults"  />
            </SelectField>
            </MuiThemeProvider>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <SelectField
              floatingLabelText="Children (0-11)"
              value={this.state.Childvalue}
              onChange={this.handleChange2} >
              {item}
             
            </SelectField>
            </MuiThemeProvider>
          </div>
        );
      }
    }
  export default MoreOptionComponent;