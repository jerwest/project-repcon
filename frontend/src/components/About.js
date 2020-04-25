import React from 'react';
import profilepic from '../blank-profile-pic.png';

function About(){
  return(

    <div className='About'>

      <div className='Team-member'>
        <img src={profilepic} alt="Logo" />
        <h2> Team Member </h2>
      </div>

      <div className='Team-member'>
        <img src={profilepic} alt="Logo" />
        <h2> Team Member </h2>
      </div>

      <div className='Team-member'>
        <img src={profilepic} alt="Logo" />
        <h2> Team Member </h2>
      </div>

      <div className='Team-member'>
      <img src={profilepic} alt="Logo" />
        <h2> Team Member </h2>
      </div>

      <div className='Team-member'>
        <img src={profilepic} alt="Logo" />
        <h2> Team Member </h2>
      </div>
    </div>

  );
}


export default About;
