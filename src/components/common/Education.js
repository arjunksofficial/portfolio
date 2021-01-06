import React, { Component } from 'react';
import fisatLogo from '../../assets/images/fisatLogo.png';
import ihrdLogo from '../../assets/images/IHRD_Logo.jpg';
import './Education.css'


function Educations() {
    var educations = [
        {
            institution: "Federal Institute of Science & Technology, Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577",
            logo: fisatLogo,
            link: "http://fisat.ac.in",
            course: "B.Tech in Computer Science and Engineering",
            score: "7 / 10",
            duration: "2014 - 2018",
            subjects: [
                "Computer Science, Maths",
            ],
        },
        {
            institution: "Model Technical Higher Secondary School Kaprassery, Nedumbassery P.O, Ernakulam, 683585",
            logo: ihrdLogo,
            link: "http://thsskaprassery.ihrd.ac.in/",
            course: "Plus Two: Physical Science",
            score: "9.1 / 10",
            duration: "2012 - 2014",
            subjects: [
                "Mathematics, Physics, Computer Science, Electronics"
            ],
        },
        {
            institution: "Model Technical Higher Secondary School Kaprassery, Nedumbassery P.O, Ernakulam, 683585",
            logo: ihrdLogo,
            link: "http://thsskaprassery.ihrd.ac.in/",
            course: "Standard X",
            score: "9.2 / 10",
            duration: "2012 - 2014",
            subjects: [
                "Mathematics, Physics, Computer Science, Electronics"
            ],
        },
    ];
    return (
        <div className={`Content`}>
            <h2 id="educationID">Education</h2>
            {
                educations.map(education => <Experience
                    logo={education.logo}
                    link={education.link}
                    institution={education.institution}
                    course={education.course}
                    score={education.score}
                    duration={education.duration}
                    subjects={education.subjects} />)
            }
        </div>
    )
}

class Experience extends Component {
    render() {
        return (
            <div className="Education">
                <div className="EducationInstitutionLogoContainer">
                    <a href={this.props.link} target="_blank">
                        <img src={this.props.logo} alt='institution logo' className="InstitutionLogo" />
                    </a>
                    <h4>{this.props.duration}</h4>
                </div>
                <div className="InstitutionDescription">
                    <h4>{this.props.institution}</h4>
                    <h5>{this.props.course}</h5>
                    <h1 className="CourseDetail">{this.props.score}</h1>
                    <div>
                        {this.props.subjects.map(task => <p>{task}</p>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Educations
