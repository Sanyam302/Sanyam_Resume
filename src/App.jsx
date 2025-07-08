
import React from 'react'
import Home from './pages/home'
import Navbar from './pages/navbar'
import MainRoutes from './pages/mainroutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Background from './pages/background'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar/>
      <Background/>
      <MainRoutes/>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App

