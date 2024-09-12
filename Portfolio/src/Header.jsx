import React from "react"
import {NavLink} from 'react-router-dom';
export default function Header(){

    return(
        <header>
            <nav className="nav">
                <NavLink to="/Projects">
                <button className="navK">Projects</button>
                </NavLink>
                
                <NavLink 
                to="/Contact">
                <button  className="navK">Contact</button>
                    </NavLink>
                
                <NavLink 
                to="/About">
                <button  className="navK">About</button>
                    </NavLink>

                <NavLink 
                to="/">
                <button  className="navK">Home</button>
                    </NavLink>
               <h1 className="h1style">Nicholas Anthony Lacapria</h1>
            </nav>
            
        </header>
    )
}
