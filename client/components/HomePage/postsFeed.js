import React from 'react';
import { connect } from 'react-redux';

import PostCard from './postCard';

//posts is an array containing post objects
//post object keys -> _id, title, pros, cons, date, users_id.
const mapStateToProps = (state) => ({
  posts: state.yetiReducer.posts,
})

const PostsFeed = props => {
  // Logic for creating several post card containers
  

  const postItems = props.posts.map((cardItem) => <PostCard title={cardItem.title} pros={cardItem.pros} cons={cardItem.cons} date={cardItem.date} user_id={cardItem.users_id}/>)


  return (
    <div>
      {/* Several Post Cards get rendered here */}
      {postItems}
    </div>
  )
}

export default connect(mapStateToProps, null)(PostsFeed);