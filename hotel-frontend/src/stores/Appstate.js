import { observable, action, toJS } from 'mobx';
import axios from 'axios';
const URL = 'http://localhost:5000/hotel/show-hotels/';

class RoomData {

    id ;
    @observable adults = 2;
    @observable children = 0;
    @observable age1 = '';
    @observable age2 = '';

    constructor(adults,children,age1,age2) {
        this.id = Math.random()
       this.adults = adults
        this.children = children
        this.age1 = age1
        this.age2 = age2
    }
}

const rooms = observable ([])
class Search extends RoomData {
    @observable destination = '';
   @observable dataSource = [];
    @observable dates = { checkIn:'' , checkOut :''}

    @observable room_mode= '';
  
    rooms = toJS(rooms)

    @action addRoom(){
        this.rooms.push(new RoomData())
       }

       @action onUpdateInputAC(data) {

      this.destination = data;
      console.log(data)
    
     let url =  URL + data
        
            if(data !== '') {
              axios.get(url)
                .then( (response) => {
                let searchResults, retrievedSearchTerms;
                searchResults = response.data;
             
                retrievedSearchTerms = searchResults.map(function(result) {
                 return result.name;
                });

                this.dataSource = retrievedSearchTerms
            })
          }
        }
      
       }

     

const store = new Search() ;

export default (store);
