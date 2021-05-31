import React from 'react';
import InfiniteCalendar, { Calendar, withRange } from 'react-infinite-calendar';
import { connect } from 'react-redux';
import moment from 'moment';
// eslint-disable-next-line
import recur from 'moment-recur';

// Render the Calendar
var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class RentItemCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDates: {
        start: today,
        end: today
      }
    };
  }

  onCalendarSelect = e => {
    if (e.eventType === 3) {
      this.setState({
        selectedDates: {
          start: e.start,
          end: e.end
        }
      });
      this.props.handleCalendar(e.start, e.end);
    }
  };

  recurringDatesArray = (start, end) => {
    var recurrence = moment()
      .recur(start, end)
      .every(1)
      .days();
    var allDates = recurrence.all('L');
    console.log(allDates);
    return allDates;
  };

  disabledDates = () => {
    // debugger;
    console.log(
      this.props.rentals.some(rental => rental.item.id === this.props.item.id)
    );
    const disabledRentals = [];
    if (
      !this.props.rentals.some(rental => rental.item.id === this.props.item.id)
    ) {
      return null;
    } else {
      console.log(this.props.rentals);
      let filteredRentals = this.props.rentals.filter(
        rental => rental.item.id === this.props.item.id && rental.status !== "Available"
      );
      console.log(filteredRentals);
      for (let rental of filteredRentals) {
        let start = rental.start_date;
        let end = rental.end_date;

        // debugger
        let recurringDates = this.recurringDatesArray(start, end);
        disabledRentals.push(recurringDates)
      }
    }
    return disabledRentals.flat().map(rental => new Date(rental))
  };

  render() {
    return (
      <InfiniteCalendar
        Component={withRange(Calendar)}
        height={200}
        selected={this.state.selectedDates}
        width={400}
        onSelect={this.onCalendarSelect}
        minDate={lastWeek}
        locale={{
          headerFormat: 'MMM Do'
        }}
        disabledDates={this.disabledDates()}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    groups: state.groups,
    rentals: state.rentals
  };
};

export default connect(mapStateToProps)(RentItemCalendar);
