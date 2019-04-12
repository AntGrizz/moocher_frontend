import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { patchRental } from '../redux/actions/updateRental';
import { setUser } from '../redux/actions/user';
import marked from 'marked';






class RequestCard extends React.Component{

  // debugger
  getMarkdown = (FORM_INPUT) => {
    if (FORM_INPUT) {
      let markdown = marked(FORM_INPUT, { sanitize: true })
      return { __html: markdown }
    }
  }

  render(){
    const item = this.props.user.items.find(item => item.id === this.props.request.item_id)

    return (
      <Card className="column card">
        <Card.Content style={{overflow: 'auto'}}>
          <div dangerouslySetInnerHTML={this.getMarkdown(item.image)} />
        </Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{`Owner: ${this.props.user.first_name} ${this.props.user.last_name}`}</span>
        </Card.Meta>
        {this.props.users.length > 1 &&
          <Card.Description>{`Requestor: ${this.props.users.find(owner => owner.id === this.props.request.renter_id).first_name} ${this.props.users.find(owner => owner.id === this.props.request.renter_id).last_name}`}</Card.Description>
        }
        <Card.Description>{`Rental Period: ${this.props.request.start_date} - ${this.props.request.end_date}`}</Card.Description>
        <Card.Content style={{marginBottom: '100vh'}} extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={() => this.props.approveRental(this.props.request)}>
              Approve
            </Button>
            <Button basic color='red' onClick={ () => this.props.denyRental(this.props.request)}>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
  


const mapDispatchToProps = dispatch => {
  return {
    approveRental: (request, user) => {
      // debugger
      dispatch(patchRental(request, 'rented', user));
    },
    denyRental: (request, user) => {
      // debugger
      dispatch(patchRental(request, 'available', user));
    },
    setUser: (user) => {
      // debugger
      dispatch(setUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RequestCard);



