import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { patchRental } from '../redux/actions/rentals';
import { connect } from 'react-redux';
import ReturnDropdown from './ReturnDropdown';

class ReturnModal extends React.Component {
  constructor() {
    super();
    this.state = {
      condition: ''
    };
  }

  handleDropDown = val => {
    this.setState({ condition: val });
  };

  render() {
    return (
      <Modal trigger={<Button>Return Item</Button>} style="top: -50vh">
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>Start Condition: {this.props.rental.start_condition}</p>
            End Condition:
            <ReturnDropdown handleDropDown={this.handleDropDown} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Content>
          <div className="ui one button">
            <Button
              basic
              color="black"
              onClick={() =>
                this.props.closeRental(this.props.rental, this.state.condition)
              }
            >
              Return
            </Button>
          </div>
        </Modal.Content>
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
    closeRental: (rental, condition) => {
      dispatch(patchRental(rental, 'Available', condition));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReturnModal);
