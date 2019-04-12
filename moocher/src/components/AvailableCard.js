import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export const AvailableCard = (props) => (
  <Card className="column">
    <Image src={'http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg'} />
    <Card.Header>{props.item.name}</Card.Header>
    <Card.Meta>
      <span className='date'>{`Owner: ${props.user.first_name} ${props.user.last_name}`}</span>
    </Card.Meta>
    <Card.Description>{`Description: ${props.item.description}`}</Card.Description>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>
          Approve
          </Button>
        <Button basic color='red'>
          Decline
          </Button>
      </div>
    </Card.Content>
  </Card>
)