import React, { useState, useEffect, useContext } from 'react';
import { LoginContext } from './LoginContext';
import Table from 'react-bootstrap/Table';
import Navigation from "./Navigation";
const Events = () => {
    const URL = "http://localhost:8080/invitations";
    const [invitations, setInvitations] = useState([]);
    const [context, setContext] = useContext(LoginContext);
    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: new Headers({
                'Authorization': context
            }),
        })
            .then((response) => response.json())
            .then((data) => setInvitations([...data]))
            .catch((json) => {
                setInvitations([])
            });
    },[])
    return (<div>
                <Navigation context={context}/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User email</th>
                    <th>Event name</th>
                </tr>
            </thead>
            <tbody>
                {invitations && invitations.map(invitation =>
                    <tr key={invitation.id}>
                        <td>{invitation.id}</td>
                        <td>{invitation.event.owner.email}</td>
                        <td>{invitation.event.name}</td>
                    </tr>)}
            </tbody>
        </Table>
    </div>)
};
export default Events;