import React from 'react';
import {Card,ListGroup} from 'react-bootstrap'

function UserCard({contact}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Header>Contact</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>{contact.name}</ListGroup.Item>
      <ListGroup.Item>{contact.email}</ListGroup.Item>
      <ListGroup.Item>{contact.age}</ListGroup.Item>
    </ListGroup>
  </Card>
  );
}

export default UserCard;