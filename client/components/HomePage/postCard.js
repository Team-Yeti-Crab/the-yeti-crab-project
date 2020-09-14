import React from 'react';

const PostCard = props => {
  //assume we have title, pros, cons, user, time props
  const { title, pros, cons, date, username } = props

  return (

    //div should have a unique key
    <div key={`${username}_${date}`} className="postCard">

      <div className="userPic">User Pic</div>
      <div className="postBody">
        <div className="postTitle">{title}</div>
        <div className="prosContainer">{pros}</div>
        <div className="consContainer">{cons}</div>
        <div className="postDate">{date}</div>
        <div className="Comments"></div>
      </div>

    </div>
  )
}

export default PostCard;