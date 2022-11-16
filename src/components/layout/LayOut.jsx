import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import NavBar from '../navbar/Navbar'


export default function LayOut() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}
