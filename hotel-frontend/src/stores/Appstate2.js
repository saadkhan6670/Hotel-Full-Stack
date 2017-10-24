import { observable, action, computed } from 'mobx';

import _ from 'lodash';



class Hotels {

    @observable filteredData = []
    @observable searchInput = ''
    @observable ratingOnlyInput ;    
    @observable ratingInput = [];
    @observable districtInput = [];
    @observable ChainInput = [];
    @observable RAInput = [];
    @observable PAInput = [];
  



    @computed get SearchFilter() {

       
                return _.filter(this.filteredData, (data) => {

                    //Search input filter
                       return  data.summary.hotelName.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1  &&

                       //StarRating Filter
                       this.ratingInput.every((c) => {  
                         return _.some((data.rating), d => { 
                             return d.value !== c ;
                          })
                       })  &&
                        
                         _.some((data.rating), d => { 
                            return d.value !== this.ratingOnlyInput ;
                         })
                      &&

                       //District Filter
                       this.districtInput.every((c) => {
                         return data.meta.districtId !== c
                      }) &&

                      //Chain Filter
                      this.ChainInput.every((c) => {
                        return data.meta.chainId !== c
                     }) &&

                     //property Amenities Filter
                     this.PAInput.every((c) => {
                       return _.some((data.meta.amenities.propertyAmenity), d => { 
                           return d.code !== c; 
                        })
                     })   &&

                     //Room Amenities Filter
                     this.RAInput.every((c) => {
                        return _.some((data.meta.amenities.roomAmenity), d => { 
                            return d.code !== c; 
                         })
                      })

        })

    }
}
    

const store = new Hotels();

export default store;