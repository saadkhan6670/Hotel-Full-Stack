import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import axios from 'axios';

@inject('Hotel')
@observer
class MatchedHotels extends Component {
    constructor(props) {
        super(props);
        this.Hotel = this.props.Hotel;
        this.state = {
            Hotels_data : []

        };
    }

    componentWillMount() {
        axios.get("http://localhost:5000/hotel/hotels")
        .then( (response) => { 
         
            const data = response.data.map(obj => {return obj});
         this.setState({
             Hotels_data : data
         })
         
        })
        
         
    }




    render() {
        return (<div>


                    <h1> Matching Hotels </h1>
        {console.log(this.state.Hotels_data)}
        

        </div>
        )
    }
}

export default MatchedHotels;