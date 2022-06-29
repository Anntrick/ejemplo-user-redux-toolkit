import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import Login from './containers/User/Login/Login'
import Register from './containers/User/Register/Register'
import Profile from './containers/User/Profile/Profile'
import './App.css'
import Header from './components/Header/Header'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
