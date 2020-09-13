import React from 'react';

const PostCard = props => {
  //assume we have title, pros, cons, user, time props
  const { title, pros, cons, date, username } = props

  return (

    //div should have a unique key
    <div key={`${username}_${date}`}>

      <div class="userPic">User Pic</div>
      <div class="postBody">
        <div class="postTitle">{title}</div>
        <div class="prosContainer">{pros}</div>
        <div class="consContainer">{cons}</div>
        <div class="postDate">{date}</div>
        <div class="Comments"></div>
      </div>

    </div>
  )
}

export default PostCard;