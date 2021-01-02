import React from 'react';
import './Cover.css';

import profileImage from '../assets/images/profile_image.jpg';
import linkedinLogo from '../assets/images/linkedinLogo.svg';
import githubLogo from '../assets/images/githubLogo.svg';
import twitterLogo from '../assets/images/twitter.svg';
import stackOverflowLogo from '../assets/images/stackOverflow.svg';
import mediumLogo from '../assets/images/medium.svg';
import resumeLogo from '../assets/images/resumeLogo.svg';

function Cover() {
  return (
    <div className="Cover">
      <div className="CoverProfilePictureContainer">
        <img src={profileImage} alt='Profile' className="CoverProfilePicture" />
      </div>
      <div className="CoverInfo">
        <h1>Arjun K S</h1>
        <h3>Golang Backend Developer</h3>
        <p>Golang backend developer with more than 2 years experience. Experience with various DevOps terminologies and cloud services. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.</p>
        <Linkbar />
      </div>
    </div>
  );
}

function Linkbar() {
  return (
      <div>
        <a href="https://www.linkedin.com/in/arjunksofficial/" target="_blank">
          <img src={linkedinLogo} alt="linkedin logo" className="LinkIcon" />
        </a>
        <a href="https://github.com/arjunksofficial" target="_blank">
          <img src={githubLogo} alt="github logo" className="LinkIcon" />
        </a>
        <a href="https://twitter.com/ArjunKSOfficial" target="_blank">
          <img src={twitterLogo} alt="twitter logo" className="LinkIcon" />
        </a>
        <a href="https://stackoverflow.com/users/10091463/arjun-k-s" target="_blank">
          <img src={stackOverflowLogo} alt="stackoverflow logo" className="LinkIcon" />
        </a>
        <a href="https://medium.com/@aluvaarjunks" target="_blank">
          <img src={mediumLogo} alt="medium logo" className="LinkIcon" />
        </a>
        <a href="https://docs.google.com/document/d/1tZtvJ5HtxP5TPiy_XLJpJwwVt7-vzAIvMpuPfA51ei4/edit?usp=sharing" target="_blank">
          <img src={resumeLogo} alt="resume logo" className="LinkIcon" />
        </a>
      </div>
  )
}

export default Cover;
