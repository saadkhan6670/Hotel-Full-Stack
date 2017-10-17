import React, { Component } from 'react';
import axios from 'axios';
import './style.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Pagination from "react-js-pagination"
import Rheostat from 'rheostat';
import _ from 'lodash';

require("bootstrap/less/bootstrap.less");


let filterDist, filterChain, filterPA, filterRA, filterStar;
let ClonedHotels_data = [] 

class MatchedHotels extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            Hotels_data : [],
            resources: [],
            activePage: 1,
            itemsCountPerPage : 40,
            min: 1,
            max:100,
            search : ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/hotel/matched-hotels")
        .then( (response) => {
         this.setState({ Hotels_data : response.data })
    })


axios.get("http://localhost:5000/hotel/hotel-filters")
.then((response) => {
    this.setState({ resources: response.data})

}).catch((error) => {
    console.log(error)
})
}


handlePageChange = (pageNumber) =>  {
   
    this.setState({activePage: pageNumber});
  }
  handleDragStart() {
        this.setState({
            min: this.state.min +1
        })
    }

    handleDragEnd(){
        this.setState({
            min: this.state.min +1
        })
    }

    handleSliderDragMove() {
        this.setState({
            min: this.state.min +1
        })
    }

    handleDivHide(e) {
        
                var x = document.getElementById(e);
        
                if (x.style.display === "none") {
                    x.style.display = "block";
        
                } else {
                    x.style.display = "none";
                }
            }

    handleSearchClick(event) {

            console.log(this.refs.searchInput.value)
                         console.log(this.state.search)
            
            
        // let regex = new RegExp(this.refs.searchInput.value, 'i')
        // this.state.hotel_data.filter(data => { return regex.test(data.summary.hotelName) })

    }
                


    render() {

         //Cloning Hotel_data
         ClonedHotels_data = this.state.Hotels_data
         
         // Logic for displaying current hotels
         const indexOfLastHotel = this.state.activePage * this.state.itemsCountPerPage;
         const indexOfFirstHotel = indexOfLastHotel - this.state.itemsCountPerPage;
         const currentHotels = ClonedHotels_data.slice(indexOfFirstHotel, indexOfLastHotel);

         //filtring resources sata
         filterDist = _.filter(this.state.resources, d => { return d.type === "district"; });
         filterChain = _.filter(this.state.resources, d => { return d.type === "chain"; });
         filterPA = _.filter(this.state.resources, d => { return d.type === "propertyAmenity"; });
         filterRA = _.filter(this.state.resources, d => { return d.type === "roomAmenity"; });
         filterStar = _.filter(this.state.resources, d => { return d.type === "starRating"; });

        

         return (<div>

             
             <div className="container">
                 <h3>Select Hotel</h3>

                 <div className="row">

                 <div className="col-md-3">
                 <h3>Filter</h3>
                 <form className="col-sm-12 col-md-12" role="search">
                     <div className="form-group input-group">
                         <input type="text" className="form-control" placeholder="Search.." value={this.state.search} ref="searchInput" onChange={this.updateSearch.bind(this)}/>
                         <span className="input-group-btn">
                             <button className="btn btn-primary" type="button" onClick={(e) => { this.handleSearchClick(e) }}>
                                 <span className="glyphicon glyphicon-search"></span>
                             </button>
                         </span>
                     </div>
                 </form>
                 <div>
                     <h4>Price <span><button className="btn btn-default" onClick={() => this.handleDivHide(this.refs.price.id)}>^</button></span></h4>
                 </div>
                 <div id="Price" ref="price">


                     <div>
                         <Rheostat
                             min={this.state.min}
                             max={this.state.max}
                             values={[1, 100]}
                             onSliderDragStart={() => this.handleDragStart()}
                             onSliderDragEnd={() => this.handleDragEnd()}
                             onSliderDragMove={() => this.handleSliderDragMove()}
                             snap
                            
                         />

                         <span>{this.state.min}</span> <span>{this.state.max}</span> 
                     </div>



                 </div>
                 <div>
                     <h4>Star Rating <span><button className="btn btn-default" onClick={() => this.handleDivHide(this.refs.star.id)}>^</button></span></h4>
                 </div>
                 <div id="StarRating" ref="star">

                     {filterStar.map((data) => {

                         return (
                             <div>

                                 {data.value.map((value, key) => {
                                     return (
                                         <div key={key}>
                                             <label>
                                                 <input type="checkbox" value="asdasd" checked={value.selected} />


                                             </label>
                                             <label>
                                                 <Rater total={5} rating={value.code} interactive={false} />

                                             </label>
                                             <a href="#"> only </a>
                                         </div>)
                                 })}
                             </div>

                         );
                     })}
                 </div>

                 <hr />
                 <div>
                     <h4>District <span><button className="btn btn-default" onClick={() => this.handleDivHide(this.refs.dist.id)}>^</button></span></h4>
                 </div>
                 <div className="filterStyles" id="District" ref="dist">

                     {filterDist.map((data) => {

                         return (
                             <div>

                                 {data.value.map((value, key) => {
                                     return (
                                         <div key={key}>
                                             <label>
                                                 <input type="checkbox" value="asdasd" checked={value.selected} />

                                             </label>
                                             <label>
                                                 <p>{value.label}</p>

                                             </label>
                                             <a href="#"> only </a>
                                         </div>)
                                 })}
                             </div>

                         );
                     })}
                 </div>
                 <hr />
                 <div>
                     <h4>Chain <span><button className="btn btn-default" onClick={() => this.handleDivHide(this.refs.chain.id)}>^</button></span></h4>
                 </div>
                 <div className="filterStyles" id="Chain" ref="chain">

                     {filterChain.map((data) => {

                         return (
                             <div>

                                 {data.value.map((value, key) => {
                                     return (
                                         <div key={key}>
                                             <label>
                                                 <input type="checkbox" value="asdasd" checked={value.selected} />
                                             </label>
                                             <label>
                                                 <p>{value.label}</p>
                                             </label>
                                             <a href="#"> only </a>
                                         </div>)
                                 })}
                             </div>

                         );
                     })}
                 </div>
                 <hr />
                 <div>
                     <h4>Property Amenities <span><button className="btn btn-default" onClick={() => this.handleDivHide(this.refs.pa.id)}>^</button></span></h4>
                 </div>
                 <div className="filterStyles" id="PropertyAmenities" ref="pa">

                     {filterPA.map((data) => {

                         return (
                             <div>

                                 {data.value.map((value, key) => {
                                     return (
                                         <div key={key}>
                                             <label>
                                                 <input type="checkbox" value="asdasd" checked={value.selected} />
                                             </label>
                                             <label>
                                                 <p>{value.label}</p>
                                             </label>
                                             <a href="#"> only </a>
                                         </div>)
                                 })}
                             </div>

                         );
                     })}
                 </div>
                 <hr />
                 <div>
                     <h4>Room Amenities <span><button className="btn btn-default" onClick={() => this.handleDivHide(this.refs.ra.id)}>^</button></span></h4>
                 </div>
                 <div className="filterStyles" id="RoomAmenities" ref="ra">

                     {filterRA.map((data) => {

                         return (
                             <div>

                                 {data.value.map((value, key) => {
                                     return (
                                         <div key={key}>
                                             <label>
                                                 <input type="checkbox" value="asdasd" checked={value.selected} />
                                             </label>
                                             <label>
                                                 <p>{value.label}</p>
                                             </label>
                                             <a href="#"> only </a>
                                         </div>)
                                 })}
                             </div>

                         );
                     })}
                 </div>
             </div>
                  

                     <div className="col-md-9">
                         <p> {this.state.Hotels_data.length} properties found </p>
                         {currentHotels.map(data => {
                             return (
                                 <div key={Math.random()} className="col-sm-6 col-md-6">
                                     <div className="thumbnail" >
                                         <img src={data.image.map(img => { return img.url })} className="img-responsive" alt="Tajawal images" />

                                         <div className="caption">
                                             <Rater total={5} rating={data.rating.map(rating => { return rating.value })} interactive={false} />
                                             <div className="row">
                                                 <div className="col-md-6 col-xs-6">
                                                     <h3>{data.summary.hotelName}</h3>
                                                 </div>
                                                 <div className="col-md-6 col-xs-6 price">

                                                 </div>
                                             </div>
                                             <p>{data.location.address}</p>
                                             <div className="row">
                                                 <div className="col-md-6">
                                                     <h3> <label>{Math.floor(data.summary.lowRate)}</label> SAR</h3>
                                                 </div>
                                                 <div className="col-md-12">
                                                     <a className="btn btn-warning btn-product"> Select</a></div>
                                             </div>

                                             <p> </p>
                                         </div>
                                     </div>
                                 </div>
                             )
                         })}
                     </div>
                 
             </div>
             </div>
           
        {/* Pagination */}
        <Pagination
        firstPageText={<i className='glyphicon glyphicon-chevron-left'/>}
        lastPageText={<i className='glyphicon glyphicon-chevron-right'/>}
        prevPageText={<i className='glyphicon glyphicon-menu-left'/>}
        nextPageText={<i className='glyphicon glyphicon-menu-right'/>}
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.Hotels_data.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
         </div>
         )
    }    
};


export default MatchedHotels;