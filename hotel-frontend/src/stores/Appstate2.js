import { observable, computed } from 'mobx';
import _ from 'lodash';

import queryString  from 'query-string';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

// Get the current location.
const location = history.location
const parsed = queryString.stringify(location);

class Hotels {
    @observable hotel_data = []

    @observable Sort = '';
    @observable SortDir = '';

    @observable filters ={ 
     searchInput : '',
     ratingInput : [],
     districtInput : [],
     ChainInput : [],
     RAInput : [],
     PAInput : [],
     PriceInput :[]
    }
    
    @computed get SearchFilter() {
   
        const searchString = queryString.stringify(this.filters);
    
        history.push({
            pathname: '/MatchedHotels',
            search:  searchString,
        
        })
        console.log(this.filters)

        let SortedData = _.sortBy(this.hotel_data, (a) => {

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
            return data.summary.hotelName.toLowerCase().indexOf(this.filters.searchInput.toLowerCase()) !== -1 &&

                //Price Filter
                data.summary.lowRate >= this.filters.PriceInput[0] && data.summary.lowRate <= this.filters.PriceInput[1] &&


                //StarRating Filter
                this.filters.ratingInput.every((c) => {
                    return _.some((data.rating), d => {
                        return d.value !== c;
                    })
                }) &&

                //District Filter
                this.filters.districtInput.every((c) => {
                    return data.meta.districtId !== c
                }) &&

                //Chain Filter
                this.filters.ChainInput.every((c) => {
                    return data.meta.chainId !== c
                }) &&

                //property Amenities Filter
                this.filters.PAInput.every((c) => {
                    return _.some((data.meta.amenities.propertyAmenity), d => {
                        return d.code !== c;
                    })
                }) &&

                //Room Amenities Filter
                this.filters.RAInput.every((c) => {
                    return _.some((data.meta.amenities.roomAmenity), d => {
                        return d.code !== c;
                    })
                })

        })


    }
}


const store = new Hotels();

export default store;