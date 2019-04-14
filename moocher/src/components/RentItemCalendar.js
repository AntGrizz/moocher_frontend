import React from 'react';
import InfiniteCalendar, {Calendar, withRange} from 'react-infinite-calendar';

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);



class RentItemCalendar extends React.Component{
  constructor(){
    super()
    this.state = {
      selectedDates: {
        start: today,
        end: today
      }
    }
  }
  
  onCalendarSelect = (e) => {
    if (e.eventType === 3) {
      this.setState({
        selectedDates: {
          start: e.start,
          end: e.end
        }
      })
      this.props.handleCalendar(e.start, e.end)
    }
  }

  render(){
    return (
      <InfiniteCalendar
        Component={withRange(Calendar)}
        height={200}
        selected={this.state.selectedDates}
        width={400}
        onSelect={this.onCalendarSelect}
        minDate={lastWeek}
        locale={{
          headerFormat: 'MMM Do',
        }}
      />
    )
  }
}

export default RentItemCalendar