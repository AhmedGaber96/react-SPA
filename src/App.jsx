
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import LayOut from './components/layout/LayOut'
import PageError from './components/pageError/PageError'
import PortFolio from './components/portfolio/PortFolio'

let routers = createBrowserRouter([
  {path:'/',element:<LayOut/>,children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:'portfolio',element:<PortFolio/>},
    {path:'contact',element:<Contact/>},
    {path:'about',element:<About/>},
    {path:'*',element:<PageError/>},
  ]}
])

export default function App() {

  return (
  <div>
   <RouterProvider router={routers}/>
  </div>
  )
}



