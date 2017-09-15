import React, {Component} from 'react';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MoreOptionSelect from './MoreOptionsSelect'

import { inject, observer } from 'mobx-react';


var d =<MoreOptionSelect/> ;
@inject('Hotel')
@observer
class MoreOptionComponent extends Component {


handelAdd = () => { 
 
d

 }
  

  


      render() {
        let { Hotel } = this.props;

       

        return (
          <div> 
    <MoreOptionSelect/>
    
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <FloatingActionButton 
    mini={true}
    onClick={this.handelAdd}
    >
      <ContentAdd />
    </FloatingActionButton>
    </MuiThemeProvider>
     Add another room (4 max) 
     {d}
          </div>
        );
      }
    }
  export default MoreOptionComponent;