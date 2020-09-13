import React from 'react';

import PostCard from './postCard';

const PostsFeed = props => {
  // Logic for creating several post card containers
  const cardsArray = [{title: '<3 React', pros: 'Very modular. Less static html', cons: 'State management can be tricky', date: 'Mar 25 2020', username: 'Yeti Dev'}];

  postItems = cardsArray.map((cardItem) => <PostCard title={cardItem.title} pros={cardItem.pros} cons={cardItem.cons} date={cardItem.date} username={cardItem.username}/>)


  return (
    <div>
      {/* Several Post Cards get rendered here */}
      {cardItem}
    </div>
  )
}

export default PostsFeed