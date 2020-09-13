import React from 'react';

const PostCard = props => {
  //assume we have title, pros, cons, user, time props
  const { title, pros, cons, date, username } = props

  return (

    //div should have a unique key
    <div key={`${username}_${date}`}>

    </div>
  )
}

export default PostCard;