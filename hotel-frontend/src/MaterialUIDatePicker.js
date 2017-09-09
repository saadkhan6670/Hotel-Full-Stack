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
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  onDatesChange= {({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>

<div> {console.log(this.state.endDate)} </div>
</div> )
}
}

export default MaterialUIAutocomplete;