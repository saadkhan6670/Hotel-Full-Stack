import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
// import axios              from 'axios';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/unarchive';

const style = {
  margin: 12,
};

let content ;
class MaterialUISelectField extends Component {

    constructor() {
        super();
      
      this.state = { 
          selected: false,
          value: 1
    };

  
    }
    
      handleChange = (event, index, value) => {this.setState({value});

      if(value === 3 ){
        this.setState({
          selected : true
        })
   }
   else {
     this.setState ({
      selected : false
     })
   }
    }



      render() {
        content = this.state.selected 
    	? <div> Content </div>
      : null;

   
        return (
          <div> 
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.value}
              onChange={this.handleChange}
          
            >
              <MenuItem value={1} primaryText="1 Room, 2 Adults, 0 Children" />
              <MenuItem value={2} primaryText="1 Room, 1 Adults, 0 Children" />
              <MenuItem value={3} primaryText="More Options" />
            
            </SelectField>
            </MuiThemeProvider>

            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
            </MuiThemeProvider>

            {console.log(this.state.value)}
            {console.log(this.state.selected)}
            {content}
        
          </div>
        );
      }
    }
  export default MaterialUISelectField;