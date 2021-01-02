import React, { Component } from 'react';
import './Skills.css'

function Skills() {
    return (
        <div className={`Content`}>
            <h2 id="skillsID">Skills</h2>
            <div className="Skilltype">
                <h4>Languages</h4>
                <ul>
                    <li>Go</li>
                    <li>JavaScript</li>
                    <li>Shell scripts</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div className="Skilltype">
                <h4>Databases</h4>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Cassandra</li>
                    <li>Redis</li>
                    <li>ElasticSearch</li>
                </ul>
            </div>
            <div className="Skilltype">
                <h4>Services</h4>
                <ul>
                    <li>Google Vision API</li>
                    <li>AWS S3, SNS</li>
                    <li>GCP</li>
                </ul>
            </div>
            <div className="Skilltype">
                <h4>Tools</h4>
                <ul>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                </ul>
            </div>
            <div className="Skilltype">
                <h4>CI/CD</h4>
                <ul>
                    <li>Jenkins</li>
                    <li>Gitlab CI</li>
                    <li>Github CI</li>
                </ul>
            </div>
            <div className="Skilltype">
                <h4>IDE</h4>
                <ul>
                    <li>VSCode</li>
                </ul>
            </div>
            <div className="Skilltype">
                <h4>OS</h4>
                <ul>
                    <li>Linux</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
