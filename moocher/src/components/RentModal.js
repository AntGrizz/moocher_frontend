import React from 'react'
import { Button, Header, Modal, ModalDescription } from 'semantic-ui-react'
import { patchRental } from '../redux/actions/updateRental'
import { connect } from 'react-redux';
import ReturnItemCalendar from './RentItemCalendar';

class RentModal extends React.Component {
  constructor() {
    super()
    this.state = {
      start: '',
      end: ''
    }
  }

  handleCalendar = (start, end) => {
    debugger
    this.setState({ start: start, end: end });
  };

  render() {
    return (
      <Modal trigger={<Button>Rent Item</Button>}>
        <Modal.Content>
          <h2>{this.props.item.name}</h2>
          <Modal.Description>
            <h3>Condition: {this.props.item.condition}</h3>
          </Modal.Description>
          <br></br>
          <ReturnItemCalendar handleCalendar={this.handleCalendar} />
          <div className='ui one button return'>
            <Button basic color='black' onClick={() => this.props.submitRequest(this.props.rental, this.state.condition)}>
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
    submiRequest: (rental, condition) => {
      dispatch(patchRental(rental, 'available', condition));
    },
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(RentModal);