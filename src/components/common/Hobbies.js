import React, { Component } from 'react';
import './Hobbies.css'


function Hobbies() {
    return (
        <div className={`Content`}>
            <div className="Hobbies">
                <h2 id="hobbiesID">Hobbies</h2>
                <ul>
                    <li>Watching Movies</li>
                    <li>Competitive Coding</li>
                    <li>Knowing Tech updates</li>
                </ul>
            </div>
        </div>
    )
}

export default Hobbies
