import React from 'react';
import Buttons from './Buttons.jsx';
import YetiLogo from './YetiLogo';

// this will allow to render the home page

const LandingPage = (props) => {
  return (
    <div className='authContainer'>
      {/* Cute Yeti Logo */}
      <YetiLogo />
      {/* Import our buttons */}
      <Buttons />
    </div>
  );
};

export default LandingPage;
