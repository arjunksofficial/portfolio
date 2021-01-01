import React from 'react';
import './Cover.css';

import profileImage from '../assets/images/profile_image.jpg';

function Cover() {
  return (
    <div className="Cover">
      <div className="CoverProfilePictureContainer">
        <img src={profileImage} alt='Profile Image' className="CoverProfilePicture"/>
      </div>
      <div className="CoverInfo">
        <h1>Arjun K S</h1>
        <h3>Golang Backend Developer</h3>
        <p>Golang backend developer with more than 2 years experience. Experience with various DevOps terminologies and cloud services. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.</p>
      </div>
    </div>
  );
}

export default Cover;
