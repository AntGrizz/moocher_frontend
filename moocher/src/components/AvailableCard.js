import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { patchRental } from '../redux/actions/rentals';
import marked from 'marked';

class AvailableCard extends React.Component {


  getMarkdown = (FORM_INPUT) => {
    if (FORM_INPUT) {
      let markdown = marked(FORM_INPUT, { sanitize: true })
      return { __html: markdown }
    }
  }

  render() {
    const item = this.props.user.items.find(item => item.id === this.props.rental.item_id)
    return (
      <Card className="column card">
        <Card.Content>
          <div dangerouslySetInnerHTML={this.getMarkdown(item.image)} />
        </Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{`Owner: ${this.props.user.first_name} ${this.props.user.last_name}`}</span>
        </Card.Meta>
        {this.props.users.length > 1 &&
          <Card.Description >{`Renter: ${this.props.users.find(owner => owner.id === this.props.rental.renter_id).first_name} ${this.props.users.find(owner => owner.id === this.props.rental.renter_id).last_name}`}</Card.Description>
        }
        <Card.Description>{`Rental Period: ${this.props.rental.start_date} - ${this.props.rental.end_date}`}</Card.Description>
        <Card.Content extra>
          <div className='ui one button'>
            <Button basic color='black' onClick={() => this.props.closeRental(this.props.rental, this.props.user)}>
              Return
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    closeRental: (rental, user) => {
      dispatch(patchRental(rental, 'available', user));
    },
  }
};

export default connect(null,
  mapDispatchToProps)(AvailableCard);