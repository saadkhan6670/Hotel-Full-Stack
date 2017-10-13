import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import './style.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Pagination from "react-js-pagination"

@inject('Hotel')
@observer
class MatchedHotels extends Component {
    constructor(props) {
        super(props);
        this.Hotel = this.props.Hotel;
        this.state = {
            Hotels_data : [],
            activePage: 1,
            itemsCountPerPage : 40
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/hotel/hotels")
        .then( (response) => {
         this.setState({ Hotels_data : response.data })
    })
}

handlePageChange = (pageNumber) =>  {
   
    this.setState({activePage: pageNumber});
  }

  onSearchClick = (e) => {
        this.state.Hotels_data.filter(data => {
            return data.summary.hotelName.indexOf(e) >= 0
        })
  }


    render() {
         // Logic for displaying current todos
         const indexOfLastHotel = this.state.activePage * this.state.itemsCountPerPage;
         const indexOfFirstHotel = indexOfLastHotel - this.state.itemsCountPerPage;
         const currentHotels = this.state.Hotels_data.slice(indexOfFirstHotel, indexOfLastHotel);

        return (<div>

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

        <h1> Apply Filters To the Search </h1>

        <form className="navbar-form" role="search">
        <div className="form-group input-group">
          <input type="text" className="form-control" name="serchfield" placeholder="Search.." ref="searchInput"/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.onSearchClick}>
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>        
        </div>
      </form>
      

            {/* Data Show Div */}
        { currentHotels.map(data => {
        return (
<div key={data.hotelId} className="container">
 <div className="row">
     <div className="col-md-12">
         <div className="col-sm-6 col-md-6">
             <div className="thumbnail" >
                 <img src={data.image.map( img => {return img.url})} className="img-responsive" alt="ahsan ki iamge" />
                 
                 <div className="caption">
                 <Rater total={5} rating={data.rating.map(rating => {return rating.value})} interactive={false} />
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
         
     </div> 

 </div>
</div>)
     })}
      
        </div>
        )
    }
};

export default MatchedHotels;