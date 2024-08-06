/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import Button from "react-bootstrap/Button";
import Dashboard from './component/dashboard/dashboard';
import PostUser from './component/postUser/postUser'
import UpdateUser from './component/updateUser/updateUser'
import Nomatch from './component/nomatch/noMatch'
import Header from './component/header/header'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/user' element={<PostUser></PostUser>}></Route>
        <Route path='/user/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='*' element={<Nomatch></Nomatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
