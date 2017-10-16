import React, { Component } from 'react';
import axios from 'axios';
import './style.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Pagination from "react-js-pagination"

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Scrollbar from 'smooth-scrollbar';

require './styles.css'


class MatchedHotels extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            Hotels_data : [],
            resources: [],
            activePage: 1,
            itemsCountPerPage : 40
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/hotel/matched-hotels")
        .then( (response) => {
         this.setState({ Hotels_data : response.data })
    })
}

componentWillMount() {

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


    render() {
         // Logic for displaying current hotels
         const indexOfLastHotel = this.state.activePage * this.state.itemsCountPerPage;
         const indexOfFirstHotel = indexOfLastHotel - this.state.itemsCountPerPage;
         const currentHotels = this.state.Hotels_data.slice(indexOfFirstHotel, indexOfLastHotel);
         return (<div>

<scrollbar>
    <div className="scroll-content">
        your contents here...
        your contents here...
        your contents here...
    </div>
    <div className="scrollbar-track scrollbar-track-x">
        <div className="scrollbar-thumb scrollbar-thumb-x"></div>
    </div>
    <div className="scrollbar-track scrollbar-track-y">
        <div className="scrollbar-thumb scrollbar-thumb-y"></div>
    </div>
</scrollbar>
             
             <div className="container">
                 <h3>Select Hotel</h3>

                 <div className="row">

                     <div className="col-md-3">
                         <h4>Filter</h4>
                         <form className="col-sm-12 col-md-12" role="search">
                             <div className="form-group input-group">
                                 <input type="text" className="form-control" placeholder="Search.." ref="searchInput" />
                                 <span className="input-group-btn">
                                     <button className="btn btn-primary" type="button" onClick={(e) => { this.handleSearchClick(e) }}>
                                         <span className="glyphicon glyphicon-search"></span>
                                     </button>
                                 </span>
                             </div>
                         </form>

                         <div> 
                             {this.state.resources.map( (data,index,array) => {
                                
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