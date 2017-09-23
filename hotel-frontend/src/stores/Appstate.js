import { observable, action } from 'mobx';

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
    @observable check_in= '';
    @observable check_out='';
    @observable room_mode= '';
    @observable rooms = [] ;
    
    @action addComment(adults,children,age1,age2){
        this.rooms.push( new RoomData(adults,children,age1,age2) )
       }
}


const store = new Search();
export default store;