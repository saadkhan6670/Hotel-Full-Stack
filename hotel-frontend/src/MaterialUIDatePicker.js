import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import React, {Component} from 'react';


class MaterialUIAutocomplete extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            startDate : '',
            endDate : '',
            focusedInput : ''
        }
      }

    render() {
        return (<div> <DateRangePicker
  startDate={this.state.startDate} 
  endDate={this.state.endDate} 
  onDatesChange= {({ startDate, endDate }) => this.setState({ startDate, endDate })} 
  focusedInput={this.state.focusedInput} 
  onFocusChange={focusedInput => this.setState({ focusedInput })}
/>

<div> {console.log(this.state.endDate._d)} </div>
</div> )
}
}

export default MaterialUIAutocomplete;