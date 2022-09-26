import React, { useState, useEffect, useContext } from 'react';
import { LoginContext } from './LoginContext';
import Table from 'react-bootstrap/Table';
import Navigation from "./Navigation";
const Events = () => {
    const URL = "http://localhost:8080/events";
    const [events, setEvents] = useState([]);
    const [context, setContext] = useContext(LoginContext);
    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: new Headers({
                'Authorization': context
            }),
        })
            .then((response) => response.json())
            .then((data) => setEvents([...data]))
            .catch((json) => {
                setEvents([])
            },[]);
    })
    return (<div>
                <Navigation context={context}/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Owner email</th>
                </tr>
            </thead>
            <tbody>
                {events && events.map(event =>
                    <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.name}</td>
                        <td>{event.owner.email}</td>
                    </tr>)}
            </tbody>
        </Table>
    </div>)
};
export default Events;