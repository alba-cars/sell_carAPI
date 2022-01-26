import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeSellDrop from './components/home'
import Login from './components/login'
import Users from './components/home/users/index'
import CreateUser from './components/home/users/create'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes path='/'>
          <Route index element={<HomeSellDrop />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="/users/create" element={<CreateUser />} />
        </Routes>
    </div>
  );
}

export default App;