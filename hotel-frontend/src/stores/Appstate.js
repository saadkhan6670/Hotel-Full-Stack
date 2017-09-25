import { observable, action } from 'mobx';
import axios from 'axios';

const URL = 'http://localhost:5000/hotel/show-hotels/';

class RoomData {
    @observable adults = '';
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

class Search {
    @observable destination = '';
    @observable dataSource = [];
    @observable check_in= '';
    @observable check_out='';
    @observable room_mode= '';
    @observable rooms = [] ;

    @action addComment(adults,children,age1,age2){
        this.rooms.push( new RoomData(adults,children,age1,age2) )
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

        @action onDatesChange(startDate,endDate){

        this.check_in = startDate;
        this.check_out = endDate;

        }
       }



const store = new Search();
export default store;