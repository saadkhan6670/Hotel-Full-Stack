import { observable, action } from 'mobx';
import axios from 'axios';

const URL = 'http://localhost:5000/hotel/show-hotels/';



class Search {
    @observable destination = '';
    @observable dataSource = [];
    @observable dates = { checkIn:'' , checkOut :''}
    @observable room_mode= '';
    @observable rooms = [] ;
    @observable hotelsdata = new RoomData()

    @observable HotelData = {
        adults: '',
        children: '',
        age1: '',
        age2: ''

    }



    @action addRoom(adults,children,age1,age2){
        this.rooms.push( )
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

       class RoomData {
        @observable adults = "ahsan"
        @observable children = '';
        @observable age1 = '';
        @observable age2 = '';
    
        constructor(adults, children,age1,age2) {
            this.adults = adults
            this.children = children
            this.age1 = age1
            this.age2 = age2
        }
 
    }


const store = new Search() ;

export default store;
