import React from 'react';
import './Content.css';
import Educations from './Education';
import Experiences from './Experience';
import Skills from './Skills';
import Certifications from './Certifications';
import Hobbies from './Hobbies';
import Contact from './Contact';

function Content() {
    return (
        <div>
            <Experiences className="Content" />
            <Educations className="Content" />
            <Skills className="Content" />
            <Certifications className="Content" />
            <Hobbies className="Content" />
            <Contact className="Content" />
        </div>
    )
}
export default Content