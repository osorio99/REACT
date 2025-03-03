import { Navbar } from "../Nav.jsx/Navbar"
 import "./Header.css" 
 import { ItemNavbar } from "../../componets/ItemNavbar"


  export const Header = () => {
    return (
     <header className="header">
      <h1>holaa</h1>
              <ItemNavbar route="/"
             myStyles="text-white fond-bold m-2 hover:text-sky-400 hover:underline"
             contentItem="home"
           />
            <ItemNavbar route="/clase 1"
              myStyles="text-white fond-bold m-2 hover:text"
              contentItem="item"
           />
            <ItemNavbar route="/NotFount"
              myStyles="text-white fond-bold m-2 hover:text"
              contentItem="item"
           />
            
       </header>
       
    )
  }
  
