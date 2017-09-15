import { observable, action } from 'mobx';

class Hotel {
    @observable test = true;
    @observable clear ;

    
}


const store = new Hotel();
export default store;