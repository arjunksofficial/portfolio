import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Sections">
                <a href="#experience" className={`Section active`}>Experience</a>
                <a href="#education" className="Section">Education</a>
                <a href="#skills" className="Section">Skills</a>
                <a href="#certifications" className="Section">Certifications</a>
                <a href="#hobbies" className="Section">Hobbies</a>
                <a href="#contact" className="Section">Contact</a>
            </div>
        </div>
    )
}
export default Navbar