
import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import MainRoutes from './pages/MainRoutes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Background from './pages/Background'
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

