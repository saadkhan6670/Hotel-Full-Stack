import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import AgeofChildren from './AgeofChildren'
import _ from 'lodash';
import { inject, observer } from 'mobx-react';

const items1 = [
  
  <MenuItem key={0} value={0} primaryText="0 Children" />,
  <MenuItem key={1} value={1} primaryText="1 Children" />,
  <MenuItem key={2} value={2} primaryText="2 Children" />
  
];

let item , content;
let ageComponent1 =   <AgeofChildren/>  ;
let ageComponent2 = <div> <AgeofChildren/> <AgeofChildren/>  </div> ;

@inject('MoreOptionSelectStore')
@observer
class RoomSelect extends Component {


  handleChange = (event, index, value) => {
    let  {MoreOptionSelectStore} = this.props;
   MoreOptionSelectStore.AdultvalueRoom1 = value 
  
  if(value === 3){
    MoreOptionSelectStore.ChildvalueRoom1 = 0;
    content = ''
    return item =_.dropRight(items1,1 )
 
  }
  else if(value === 4){
    MoreOptionSelectStore.ChildvalueRoom1 = 0;
    content = ''
    return item =_.dropRight(items1,2 )

  }
  else { 
    MoreOptionSelectStore.ChildvalueRoom1 = 0;
    content = ''
    return item = items1
  }

 }

 handleChange2 = (event, index, value) => { 
  let  {MoreOptionSelectStore} = this.props;
   
  MoreOptionSelectStore.ChildvalueRoom1 = value;
 if(value === 1){
  
  content =  ageComponent1;
}
else if (value === 2){
  
  content = ageComponent2 ;
}

else {
  content = '' ;
}}

      render() {
        let  {MoreOptionSelectStore} = this.props;
       
        return (
          <div> 
            <h4> Room 1 </h4>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <SelectField
              floatingLabelText="Adults (+12)"
              value={MoreOptionSelectStore.AdultvalueRoom1}
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
              value={MoreOptionSelectStore.ChildvalueRoom1}
              onChange={this.handleChange2} >
              {item}
             
            </SelectField>
            </MuiThemeProvider>
            {content}    
  
          </div>
        );
      }
    }
  export default RoomSelect;