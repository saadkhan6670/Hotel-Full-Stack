import React, {Component} from 'react';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RoomSelect2 from './RoomSelect2'
import RoomSelect3 from './RoomSelect3'
import RoomSelect from './RoomSelect'
import RoomSelect4 from './RoomSelect4'
import { inject, observer } from 'mobx-react';


@inject('Hotel','MoreOptionSelectStore')
@observer
class MoreOptionComponent extends Component {


handelAdd = () => { 
  let { Hotel , MoreOptionSelectStore } = this.props;
if(Hotel.count === 1){
  Hotel.count ++ 
  return Hotel.room2 = <div> <RoomSelect2/>  </div> ;
}

 if(Hotel.count === 2){
  Hotel.count ++ 
  MoreOptionSelectStore.clearRoom2Button = true
  return Hotel.room3 = <div> <RoomSelect3/>  </div> ;
}

if(Hotel.count === 3){
  Hotel.count ++ 
  MoreOptionSelectStore.clearRoom3Button = true
  MoreOptionSelectStore.clearAddButton = true
  return Hotel.room4 = <div> <RoomSelect4/>  </div> ;
}
else {
  console.log("not enought info")
}
 }
      render() {
        let { Hotel , MoreOptionSelectStore } = this.props;

        return (
          <div> 
              <RoomSelect  room={}/>
              {Hotel.room2}
              {Hotel.room3}
              {Hotel.room4}
    
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <FloatingActionButton 
    mini={true}
    disabled={MoreOptionSelectStore.clearAddButton} 
    onClick = { this.handelAdd }
    >
      <ContentAdd />
    </FloatingActionButton>
    </MuiThemeProvider>
     Add another room (4 max) 
   
          </div>
        );
      }
    }
  export default MoreOptionComponent;