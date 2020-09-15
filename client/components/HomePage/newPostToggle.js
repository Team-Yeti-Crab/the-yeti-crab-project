import React, {useState} from 'react';


//newPostToggle will be used to render a newPost modal upon clicking the toggle button (the add post button).

const NewPostToggle = ({ toggle, content }) => {
  //creates a functional component state called isShown which defaults to false. Also creates a function that can change the state of isShown.
  const [isShown, setIsShown] = useState(false);

  //hide is a function that will invoke setIsShown to set isShown to false.
  const hide = () => setIsShown(false);

  //show is a function that will invoke setIsShown to set isShown to true.
  const show = () => setIsShown(true);

  return (
    //a functional component must render a div. In this case 'React Fragments' are used. Short hand -> <> </>
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

export default NewPostToggle;