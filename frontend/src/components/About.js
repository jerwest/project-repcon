import React from 'react';
import profilepic from '../blank-profile-pic.png';

function About(){
  return(

    <div className='About'>

      <div className='Company'>
        <h2>About Project RepCon</h2>
        <p>Our experience in helping you manage your online presence will help you focus more on what
        you are passionate about. Nobody knows your target audience better than you do. And nobody
        can replicate your skill, style, and execution. We can provide you with the latest tools, so
        you can best use them to fit your needs while reaching more people than you thought possible. 
        We want to make it easier for you to spend more time doing what you do best.</p>
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

      <div className='Team-member'>
        <img src={profilepic} alt="Logo" />
        <h2> Team Member </h2>
      </div>
    </div>

  );
}


export default About;
