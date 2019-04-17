import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import ReturnItemCalendar from './RentItemCalendar';
import moment from 'moment';
import { postRentalRequest } from '../redux/actions/rentals';
// eslint-disable-next-line
import recur from 'moment-recur';

class RentModal extends React.Component {
  constructor() {
    super();
    this.state = {
      start: '',
      end: '',
      open: false
    };
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleCalendar = (start, end) => {
    this.setState({ start: this.convert(start), end: this.convert(end) });
  };

  convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }

  handleSubmit() {
    this.props.postRentalRequest(
      this.props.user.id,
      this.props.item.id,
      this.state.start,
      this.state.end,
      this.props.item.condition
    );
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        onOpen={this.open}
        trigger={<Button>Rent Item</Button>}
      >
        <Modal.Header>{this.props.item.name}</Modal.Header>
        <Modal.Description>
          <h3>
            Owner: {this.props.item.owner.first_name}{' '}
            {this.props.item.owner.last_name}
          </h3>
          <h3> Condition: {this.props.item.condition}</h3>
        </Modal.Description>
        <br />
        <Modal.Content>
          <ReturnItemCalendar
            item={this.props.item}
            convert={this.convert}
            handleCalendar={this.handleCalendar}
          />
        </Modal.Content>
        <br />
        <br />
        <Modal.Actions>
          <Button
            basic
            color="black"
            onClick={() => {
              this.handleSubmit();
              this.close();
              alert(`Your request has been submited for ${this.state.start} - ${this.state.end}`)
            }}
          >
            Submit Request
          </Button>
          <Button
            basic
            color="black"
            onClick={() => {
              this.close();
            }}
          >
            Cancel Request
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    groups: state.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postRentalRequest: (renter_id, item_id, start, end, condition) => {
      dispatch(postRentalRequest(renter_id, item_id, start, end, condition));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentModal);
