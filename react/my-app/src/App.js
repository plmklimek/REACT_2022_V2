import React, { useState } from 'react';
import './App.css';
import Login from "./Login";
import { LoginContext } from './LoginContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invitations from './Invitations';
import Users from './Users';
import Events from './Events';
const App = () => {
  const [context, setContext] = useState(localStorage.getItem("login"));
  return (
    <LoginContext.Provider value={[context, setContext]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/events" element={<Events />} />
        </Routes>
    </LoginContext.Provider>
  );
};

export default App;
