import { Routes ,Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { NotFount } from "./componets/NotFound/NotFount"
// rafc
//import React from 'react'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/clase1" element={<clase1/>}/>
      <Route path="*" element={<NotFount/>}/>
      
      
    </Routes>
      
      
    </>
    
  )
}
