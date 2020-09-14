import React from 'react';
import HomeNavBar from './HomeNavBar';
import PostsFeed from './PostsFeed'

//Will render entire home page
const Home = props => {

  return (
    <div id="Home">
      {/* Home Nav Bar */}
      <HomeNavBar />

      {/* Home Feed Page */}
      <PostsFeed />
    </div>
  )

}

export default Home;