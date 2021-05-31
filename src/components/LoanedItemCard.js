import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { approveRental } from '../redux/actions/rentals';
import ReturnModal from './ReturnModal';

class LoanCard extends React.Component{
  

    render() {
    const item = this.props.user.items.find(item => item.id === this.props.rental.item_id)
    return(
      <Card centered className='card'>
        <Card.Header>
          <Image centered spaced src={item.image} alt={item.id} className=' ui image style'/>
          <br/>
          {item.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>{`Owner: ${this.props.user.first_name} ${this.props.user.last_name}`}</span>
        </Card.Meta>
        {this.props.users.length > 1 &&
          <Card.Description >{`Renter: ${this.props.users.find(owner => owner.id === this.props.rental.renter_id).first_name} ${this.props.users.find(owner => owner.id === this.props.rental.renter_id).last_name}`}</Card.Description>
        }
        <Card.Description>{`Rental Period: ${this.props.rental.start_date} - ${this.props.rental.end_date}`}</Card.Description>
        <Card.Content extra>
          <ReturnModal rental={this.props.rental} item={item}/>
        </Card.Content>
      </Card>
    )
    }

}


const mapDispatchToProps = dispatch => {
  return {
    closeRental: (rental, user) => {
      dispatch(approveRental(rental, 'available'));
    },
  }
};

export default connect(null,
  mapDispatchToProps)(LoanCard);



// style = {{ height: '45vh', width: '17vw' }}

// style = {{ maxWidth: '95%', height: 'auto', marginBottom: '2vh' }}