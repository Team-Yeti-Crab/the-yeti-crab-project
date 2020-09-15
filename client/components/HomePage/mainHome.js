import React from 'react';
import { connect } from 'react-redux';
import HomeNavBar from './homeNavBar';
import PostsFeed from './postsFeed'

const mapStateToProps = (state) => ({
  posts: state.yetiReducer.posts,
})

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

export default connect(mapStateToProps, null)(Home);