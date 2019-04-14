import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import RentModal from './RentModal';


const GroupCard = (props) => props.loading ? <div>Loading... Hang Tight!</div> : (

  <Card   
  centered 
  className='card'>
         <Card.Header>
           <Image centered spaced src={props.item.image} alt={props.item.id} className=' ui image style' />
        <br></br>
           {props.item.name}
       </Card.Header>
         <Card.Meta>
           <span className='date'>{`Owner: ${props.item.owner.first_name} ${props.item.owner.last_name}`}</span>
         </Card.Meta>
      <Card.Content extra>
       <RentModal item={props.item}/>
      </Card.Content>
       </Card>
    )

function mapStateToProps(state){
  return {
    loading: state.loading,
    user: state.user
  }
}


export default connect(mapStateToProps)(GroupCard);