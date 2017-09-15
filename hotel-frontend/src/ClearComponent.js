import FloatingActionButton from 'material-ui/FloatingActionButton';
import Contentclear from 'material-ui/svg-icons/content/clear';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';



@inject('Hotel')
@observer
class ClearComponent extends Component {

  handelClear = () => { 
    let { Hotel } = this.props;
      Hotel.clear = ''  
    }

  render() {
    return (
<MuiThemeProvider muiTheme={getMuiTheme()}>
        <FloatingActionButton 
        mini={true}
        onClick={this.handelClear }
        >
          <Contentclear />
        </FloatingActionButton>
        
        </MuiThemeProvider>
    )
  }
      }
      export default ClearComponent;