import React from 'react';



const HomeNavBar = props => {

  

  return (
    <div id="homeNavBar">
      {/* Nav BAR LOGO */}
      {/* A cute yeti will be placed in the background of this container */}
      {/* On click should bring you back to home page / refresh home page */}
      <div id="homeYetiLogo">Yeti Logo</div>


      {/* NavBar Post Button and Pic */}
      <button type="button" id="postButton">+ POST</button>

      {/* For now, profile pic will be set as a background image via CSS. Update this eventually to be a picture in a database? */}
      <div id="profilePic">Profile Pic</div>

    </div>
  )
}

export default HomeNavBar;