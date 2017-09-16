import { observable } from 'mobx';

class MoreOptionSelect {
    @observable AdultvalueRoom1=  0;
    @observable ChildvalueRoom1= 0;
    @observable AdultvalueRoom2=  0;
    @observable ChildvalueRoom2= 0;
    @observable AdultvalueRoom3=  0;
    @observable ChildvalueRoom3= 0;
    @observable AdultvalueRoom4=  0;
    @observable ChildvalueRoom4= 0;
    @observable clearRoom2Button = false ;
    @observable clearRoom3Button = false ;
    @observable clearRoom4Button = false ;
    @observable clearAddButton = false ;

    
}


const store = new MoreOptionSelect();
export default store;