import React from 'react';
import HomeNavBar from './homeNavBar';
import PostsFeed from './postsFeed'

//Will render entire home page
const Home = props => {

  return (
    <div id="Home">
      <h1>Home page with Nav Bar</h1>
      {/* Home Nav Bar */}
      <HomeNavBar />

      {/* Home Feed Page */}
      <PostsFeed />
    </div>
  )

}

export default Home;