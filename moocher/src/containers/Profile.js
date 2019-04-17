import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import LoanedItemCard from '../components/LoanedItemCard'
import RequestItemCard from '../components/RequestItemCard'



class Profile extends React.Component{

  render(){
    console.log(this.props.user)
    return (
      <div className='page-div'>
        <div>
          <h1>
            Rental Requests
          </h1>
          <br></br>
          </div>
            <Card.Group itemsPerRow={4}>
              {console.log(this.props.user)}
             {!this.props.user ? null : this.props.user.requests.map(request => (<RequestItemCard request={request} key={request.id} user={this.props.user} users={this.props.users} />))}
            </Card.Group>
            <br></br>
        <div >
          <h1>
            Loaned Items
          </h1>
        </div>
            <Card.Group itemsPerRow={4}>
            {!this.props.user ? null : this.props.user.rentals.map(rental => (<LoanedItemCard rental={rental} key={rental.id} user={this.props.user} users={this.props.users} />))}
          </Card.Group>
      </div >
    )
    }
  }
  

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users
  };
};


export default connect(mapStateToProps)(Profile);


// (<ItemCard item={item} key={item.id} user={this.props.user} />)