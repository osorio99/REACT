import {ItemNavbar } from "../../componets/ItemNavbar"


import "./Navbar.css"
export const Navbar = ({children}) => {
  return (
    <nav className="Navbar">
          <ul>
           {/* <ItemNavbar
             myStyles="text-white fond-bold m-2 hover:text-sky-400 hover:underline"
             contentItem="home"
           />
            <ItemNavbar
              myStyles="text-white fond-bold m-2 hover:text"
              contentItem="item"
           />
            <ItemNavbar
              myStyles="text-white fond-bold m-2 hover:text"
              contentItem="item"
           />
            */}

            {children}
           </ul>
    </nav>
  )
}




