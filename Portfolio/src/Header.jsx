import React from "react"
import {Link} from 'react-router-dom';
export default function Header(){

    return(
        <header>
            <nav className="nav">
                <button className="navK">Projects</button>
                <button onClick={(e) => e.preventDefault()} className="navK">
                    <Link onClick={(e) => e.preventDefault()}
                     to="/Contact">Contact</Link>
                </button>
                <button className="navK">About</button>
                <button className="navK">Home</button>
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
