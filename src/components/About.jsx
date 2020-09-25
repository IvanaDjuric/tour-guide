import React from 'react'
import{Link} from 'react-router-dom'

const About = () => {
    return(
    
        <nav className="navbar">
            <ul>
                <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
             <Link to="/tour">Tour</Link>
             </li>
             </ul>
        </nav>
        
    )
}

export default About