import { observable, computed } from 'mobx';
import queryString  from 'query-string';
import createHistory from 'history/createBrowserHistory'
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
@observable SortDir = '';
    
    @computed get SearchFilter() {

        let SortedData = _.sortBy(this.filteredData, (a) => {

            switch (this.Sort) {
                case "priceID":
                    {
                        return a.summary.lowRate
                    }
                case "distID":
                    {
                        return a.summary.distance
                    }
                case "nameID":
                    {
                        return a.summary.hotelName
                        
                    }
                case "ratingID":
                    {
                        return a.rating.map( d => {
                           return d.value
                        })
                    }
            }

        })

        if(this.SortDir === 'DESC') {
            _.reverse(SortedData) }

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