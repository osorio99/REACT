import { Routes ,Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { NotFount } from "./componets/NotFound/NotFount"
import { Header } from "./layauts/Header/Header"
import { Footer } from "./layauts/Footer/Footer"
// rafc
//import React from 'react'

export const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/clase1" element={<clase1/>}/>
      <Route path="*" element={<NotFount/>}/>
      
      
    </Routes>
      
      <Footer/>
    </>
    
  )
}
