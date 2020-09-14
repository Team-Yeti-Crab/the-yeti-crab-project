import React from 'react';

const PostCard = props => {
  //assume we have title, pros, cons, user, time props
  const { title, pros, cons, date, user_id } = props
  const images = ["../public/jesus_cropped.png", "../public/davide_cropped.png", "../public/aaron_cropped.png", "../public/liam_cropped.png", "../public/alex_cropped.png"]
  const randomImages = images.map((el, i) => image[i])


  return (

    //div should have a unique key
    <div key={`${user_id}_${date}`} className="postCard">

      <div className="userPic">
        <img src={`${randomImages}`} alt="profile pic"/>
      </div>
      <div className="postBody">
        <div className="postTitle">{title}</div>
            
        <div className="prosAndCons">
          <div className="prosContainer">
            <h3>Pros:</h3>
            {pros}
          </div>
          <div className="consContainer">
            <h3>Cons:</h3>
            {cons}
          </div>
        </div>
        <div className="postDate">{date}</div>
        <div className="Comments">Comments</div>
      </div>

    </div>
  )
}

export default PostCard;