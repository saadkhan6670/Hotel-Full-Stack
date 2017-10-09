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

        }
    }



    render() {
        return (<div>
            {console.log (this.Hotel.onClickSearch)}

                    <h1> Matching Hotels </h1>

        </div>
        )
    }
}

export default MatchedHotels;