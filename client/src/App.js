import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SellDrop from './components/SellCarDropDown';
import HomeSellDrop from './components/home'
import Login from './components/login';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes path='/'>
          <Route index element={<HomeSellDrop />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;