import React from 'react'
import { Button, Header, Modal, Description } from 'semantic-ui-react'
import { connect } from 'react-redux';
import ReturnItemCalendar from './RentItemCalendar';
import moment from 'moment';
// eslint-disable-next-line
import recur from 'moment-recur'



class RentModal extends React.Component {
  constructor() {
    super()
    this.state = {
      start: '',
      end: ''
    }
  }

  handleCalendar = (start, end) => {
    this.setState({ start: this.convert(start), end: this.convert(end) });
  };


  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  handleSubmit(){
    var recurrence = moment().recur(this.state.start, this.state.end).every(1).days()
    var allDates = recurrence.all("L")
    console.log(allDates)
  }

  render() {

    return (
      <Modal trigger={<Button>Rent Item</Button>}>
        <Modal.Content>
          <h2>{this.props.item.name}</h2>
          <Modal.Description>
            <h3>Condition: {this.props.item.condition}</h3>
          </Modal.Description>
          <br></br>
          <ReturnItemCalendar item={this.props.item} convert={this.convert} handleCalendar={this.handleCalendar} />
          <div className='ui one button return'>
            <Button basic color='black' onClick={() => this.handleSubmit()}>
              Submit Request
            </Button>
          </div>
          <br></br>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
    groups: state.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(RentModal);