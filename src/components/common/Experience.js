import React, { Component } from 'react';
import qburstLogo from '../../assets/images/QBurstLogo.svg';
import sellerAppLogo from '../../assets/images/sellerapp.svg';
import './Experience.css'


function Experiences() {
    var experiences = [
        {
            company: "SellerApp, Bangalore, Karnataka, India",
            logo: sellerAppLogo,
            link: "https://www.sellerapp.com/",
            positions: [
                {
                    name: "Software Development Engineer 2",
                    duration: "(December 2020 - Present)"
                },
                {
                    name: "Software Development Engineer 1",
                    duration: "(December 2019 - December 2020)"
                }
            ],
            description: "SellerApp is a data analytics company which aggregates data about the e-commerce space and enables business Intelligence and seamless Management for multi-geography sellers",
            tasks: [
                "Design and optimization of microservices written in Golang (REST and grpc) which aggregates high volume of data daily",
                "Deploy and maintain containerized microservices in GCP cloud environments using gitlab CI/CD",
            ],
        },
        {
            company: "QBurst Technologies Pvt Ltd, Thrissur, Kerala, India",
            logo: qburstLogo,
            link: "https://www.qburst.com/",
            positions: [
                {
                    name: "Software Engineer",
                    duration: "(June 2018 - December 2019)"
                }
            ],
            description: "QBurst is a full-service software solutions provider that works with clients to maximize the effectiveness of their business through the adoption of digital technology. Industries they serve include healthcare, education, financial services, retail, hospitality, transportation, engineering, and tourism among others",
            tasks: [
                "Developed cloud applications for a Japanese e-commerce giant, where I got exposure to various internet technologies such as Golang, Docker, AWS, Google Vision API, Bash scripts, etc",
                "Designed and developed new web APIs for a Mobile and Desktop App with proper unit tests in Golang",
                "Fixed bugs, reduced  memory utilization and enhanced cron jobs in terms of functionality and speed",
            ],
        },
    ];
    console.log("here")
    return (
        <div className={`Content`}>
            <h2 id="experianceID">Experience</h2>
            {
                experiences.map(experience => <Experience
                    logo={experience.logo}
                    link={experience.link}
                    company={experience.company}
                    positions={experience.positions}
                    duration={experience.duration}
                    description={experience.description}
                    tasks={experience.tasks} />)
            }
        </div>
    )
}

class Experience extends Component {
    render() {
        return (
            <div className="Experience">
                <div className="ExperienceCompanyLogoContainer">
                    <a href={this.props.link} target="_blank">
                        <img src={this.props.logo} alt='company logo' className="CompanyLogo" />
                        <h4>{this.props.duration}</h4>
                    </a>
                    {this.props.positions.map(position =>
                        <div>
                            <h5>{position.name}</h5>
                            <h5>{position.duration}</h5>
                        </div>
                    )}
                </div>
                <div className="CompanyDescription">
                    <h4>{this.props.company}</h4>
                    <p>{this.props.description}</p>
                    <ul>
                        {this.props.tasks.map(task => <li>{task}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Experiences
