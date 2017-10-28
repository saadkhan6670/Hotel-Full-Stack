import { observable, computed } from 'mobx';

import _ from 'lodash';



class Hotels {

    @observable filteredData = []
    @observable searchInput = ''
    @observable ratingInput = [];
    @observable districtInput = [];
    @observable ChainInput = [];
    @observable RAInput = [];
    @observable PAInput = [];
    @observable PriceInput = [];
    @observable Sort = '';
    //(a.summary.lowRate) - (b.summary.lowRate)
    @computed get SearchFilter() {

        // switch(expression) {
        //     case n:
        //         code block
        //         break;
        //     case n:
        //         code block
        //         break;
        //     default:
        //         code block
        // }

        let SortedData = _.sortBy(this.filteredData, (a) => {

            switch (this.Sort) {
                case "Price":
                    {
                        return a.summary.lowRate
                    }
                case "Distance":
                    {
                        return a.summary.distance
                    }
                case "Name":
                    {
                        return a.summary.hotelName
                        
                    }
                case "Rating":
                    {
                        return a.rating.map( d => {
                           return d.value
                        })
                    }
            }

        })
        

          _.reverse(SortedData)

        return _.filter(SortedData, (data) => {


            //Search input filter
            return data.summary.hotelName.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1 &&

                //Price Filter
                data.summary.lowRate >= this.PriceInput[0] && data.summary.lowRate <= this.PriceInput[1] &&


                //StarRating Filter
                this.ratingInput.every((c) => {
                    return _.some((data.rating), d => {
                        return d.value !== c;
                    })
                }) &&

                _.some((data.rating), d => {
                    return d.value !== this.ratingOnlyInput;
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
                }) &&

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