import Nav from 'react-bootstrap/Nav';
import { LoginContext } from './LoginContext';
import {LinkContainer} from 'react-router-bootstrap'
import React, { useState, useContext, useEffect } from 'react';
const Navigation = (props) => {
  const [context, setContext] = useContext(LoginContext);
  return (
    <div>
    {context && 
    <Nav
      activeKey="/home"
    >
      <Nav.Item>
      <LinkContainer to="/home">
        <Nav.Link>Active</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to="/users">
        <Nav.Link>Users</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to="/events">
        <Nav.Link>Events</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to="/invitations">
        <Nav.Link>Invitations</Nav.Link>
      </LinkContainer>
      </Nav.Item>
    </Nav >
        }
        </div>
  );
}

export default Navigation;