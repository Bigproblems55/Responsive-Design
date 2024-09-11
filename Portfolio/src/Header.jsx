import React from "react"
import {Link,NavLink} from 'react-router-dom';
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
                
            </nav>
            <div id="bHead">
                <div className="bHead">
                    <h1>Nicholas Anthony Lacapria</h1>
                    <button className="K">My Projects</button>
                </div>
            </div>
        </header>
    )
}
