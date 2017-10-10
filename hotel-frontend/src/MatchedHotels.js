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
            activePage: 1
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/hotel/hotels")
        .then( (response) => {
         this.setState({ Hotels_data : response.data })
    })
}

handlePageChange = (pageNumber) =>  {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


    render() {
        return (<div>
          <Pagination
        firstPageText={<i className='glyphicon glyphicon-chevron-left'/>}
        lastPageText={<i className='glyphicon glyphicon-chevron-right'/>}
        prevPageText={<i className='glyphicon glyphicon-menu-left'/>}
        nextPageText={<i className='glyphicon glyphicon-menu-right'/>}
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.Hotels_data.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />

        {this.state.Hotels_data.map(data => {
           return (
<div className="container">
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
}


export default MatchedHotels;