import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeSellDrop from './components/home'
import Login from './components/login'
import Demo from './components/demo'
import Users from './components/home/users/index'
import CreateUser from './components/home/users/create'
import { Routes, Route } from "react-router-dom"
import Cars from './components/home/cars'

function App() {
  return (
    <div className="App">
        <Routes path='/'>
          <Route index element={<HomeSellDrop />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="demo" element={<Demo />} />
          <Route path="/users/create" element={<CreateUser />} />
          {/* cars routes */}
          <Route path='/cars/' element={<Cars />} />
        </Routes>
    </div>
  );
}

export default App;