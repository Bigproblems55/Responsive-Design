import React from "react";
import { NavLink } from "react-router-dom";
export default function Footer(){

    return(
        <footer>
            
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
                </nav>
            
        </footer>
    )
}