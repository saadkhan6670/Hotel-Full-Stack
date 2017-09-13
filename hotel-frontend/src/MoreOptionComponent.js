import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import AgeofChildren from './AgeofChildren'
import _ from 'lodash';

const items1 = [
  
  <MenuItem key={0} value={0} primaryText="0 Children" />,
  <MenuItem key={1} value={1} primaryText="1 Children" />,
  <MenuItem key={2} value={2} primaryText="2 Children" />
  
];

let item , content, ageComponent ;
class MoreOptionComponent extends Component {

  constructor() {
    super();
  
  this.state = { 
      selected1: false,
      selected2: false,
      Adultvalue: 0,
      Childvalue: 0
};
}

  handleChange = (event, index, value) => {this.setState({ Adultvalue : value });
  if(value === 3){
    return item =_.dropRight(items1,1 )
 
  }
  else if(value === 4){
    return item =_.dropRight(items1,2 )
 
  }
  else { 
    return item = items1
  }

 }

 handleChange2 = (event, index, value) => {this.setState({ Childvalue : value });
 if(value === 1){
  this.setState({
    selected1 : true,
    selected2 : false

  })
  ageComponent = <AgeofChildren/>
}

if(value === 2){
  this.setState({
    selected1 : false,
    selected2 : true

  })
  ageComponent = <div> <AgeofChildren/> <AgeofChildren/>  </div> 
}

else {
  this.setState({
    selected : false
  })
}

}

      render() {
        content = this.state.selected 
        ? ageComponent
        : null;
  
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
            {content}
          </div>
        );
      }
    }
  export default MoreOptionComponent;