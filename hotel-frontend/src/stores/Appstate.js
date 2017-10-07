import { observable, action } from 'mobx';
import axios from 'axios';
import _ from 'lodash';
const URL = 'http://localhost:5000/hotel/show-hotels/';

let retrievedSearchTerms;
class RoomData {
    room = {
        adults: '',
        children: '',
        age1:'',
        age2:''
      }

  @observable request = {
   destination : '',
   dataSource : [],   
   dates : { checkIn:'' , checkOut :''} ,
   rooms : [] 
}


    @action addRoom(){
      this.request.rooms.push(_.cloneDeep(this.room))
       }

       @action onUpdateInputAC(data) {

      this.request.destination = data;
    
     let url =  URL + data
        
            if(data.length >= 3) {
              return  axios.get(url);
             
              //   .then( (response) => {
               
             
              //   retrievedSearchTerms = response.data.map(function(result) {
              //     return result.name;
              //   });

              //  return this.request.dataSource = retrievedSearchTerms
      
            })
          }
      }
 }
const store = new RoomData() ;

export default (store);
