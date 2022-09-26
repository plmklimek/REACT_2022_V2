import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { encode } from "base-64";
import { LoginContext } from './LoginContext';
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const URL = "http://localhost:8080/login";
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [context, setContext] = useContext(LoginContext);
    const loginUser = (event) => {
        event.preventDefault();
        fetch(URL, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + encode(login + ":" + password),
                'Content-Type': 'application/json'
            }),
        })
            .then((res) => {
                localStorage.setItem("login", 'Basic ' + encode(login + ":" + password));
                setContext('Basic ' + encode(login + ":" + password));
            })
            .catch((json) => {
                setContext("")
            });
    }

    useEffect(() => {
        console.log(context);
    })
    return (
        <div>
            <Navigation context={context}/>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLogin">
                    <Form.Label htmlFor="login">Login</Form.Label>
                    <Form.Control
                        type="text"
                        id="login"
                        aria-describedby="login"
                        value={login}
                        onChange={event => setLogin(event.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLogin">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridLogin">
                    <Button variant="primary" type="submit" onClick={event => loginUser(event)}>
                        Submit
                    </Button>
                </Form.Group>
            </Row>
        </div>
    );
}
export default Login;