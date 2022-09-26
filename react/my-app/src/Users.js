import React, { useState, useEffect, useContext } from 'react';
import { LoginContext } from './LoginContext';
import Table from 'react-bootstrap/Table';
import Navigation from "./Navigation";
const Events = () => {
    const URL = "http://localhost:8080/users";
    const [users, setUsers] = useState([]);
    const [context, setContext] = useContext(LoginContext);
    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: new Headers({
                'Authorization': context
            }),
        })
            .then((response) => response.json())
            .then((data) => setUsers([...data]))
            .catch((json) => {
                setUsers([])
            });
    },[])
    return (<div>
                <Navigation context={context}/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users && users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                    </tr>)}
            </tbody>
        </Table>
    </div>)
};
export default Events;