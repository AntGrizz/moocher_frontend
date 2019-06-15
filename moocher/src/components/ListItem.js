import React, { Component } from 'react';
import { Button, Form, Header, Container, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { listItem } from '../redux/actions/item';
import ReturnDropdown from './ReturnDropdown';

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image:'',
      condition: ''
    };
  }

  handleDropDown = val => {
    this.setState({ condition: val });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name !== '') {
      this.props.listItem(
        this.state.name,
        this.state.description,
        this.state.image,
        this.state.condition,
        this.props.user
      );
      this.resetForm();
    }
  };

  resetForm = () => {
    this.setState({
      name: '',
      description: '',
      image: '',
      condition: ''
    });
  };

  render() {
    return (
      <Container className="ui attached segment" id="create-area">
        <Header as="h3">List Item</Header>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Field>
            <label>Item Name</label>
            <input
              placeholder="Item Name"
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </Form.Field>
          <Form.TextArea
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
            label="Description"
            placeholder="Describe your item"
            value={this.state.description}
          />
          <Form.Field>
            <label>Image</label>
            <input
              placeholder="Image"
              value={this.state.image}
              onChange={e => {
                this.setState({ image: e.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Condition</label>
            <ReturnDropdown handleDropDown={this.handleDropDown} />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listItem: (name, description, image, condition, user) => {
      dispatch(listItem(name, description, image, condition, user))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
