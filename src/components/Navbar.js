import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Sections">
                <a href="#experianceID" className={`Section active`}>Experience</a>
                <a href="#educationID" className="Section">Education</a>
                <a href="#skillsID" className="Section">Skills</a>
                {/* <a href="#certifications" className="Section">Certifications</a> */}
                <a href="#hobbiesID" className="Section">Hobbies</a>
                <a href="#contactsID" className="Section">Contact</a>
            </div>
        </div>
    )
}
export default Navbar