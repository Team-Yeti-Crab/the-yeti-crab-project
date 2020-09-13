import React from 'react';

const NewPostModal (props) => (
  <div id="newPostModal">
    {/* Input Fields -> Title, Pros, Cons */}

    <form>
      <label>Title</label>
      <input tyep="text" id="ftitle"  name="ftitle"></input>
      <label>PROS</label>
      <input tyep="text" id="fpros"  name="fpros"></input>
      <label>CONS</label>
      <input tyep="text" id="fcons"  name="fcons"></input>
    </form>

    <button type="button" onClick={props.hide}>SAVE POST</button>

  </div>
)

export default NewPostModal;