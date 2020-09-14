import React from 'react';

const NewPostModal = (props) => (
  <div id="newPostModal">
    {/* Input Fields -> Title, Pros, Cons */}

    <form id="modalInterior">
      <div id="modalTitle">
        <label>TITLE</label>
        <br />
        <input type="text" id="ftitle"  name="ftitle"></input>
      </div>
      <div id="modalFlex">
        <div>
          <label>PROS</label>
          <br />
          <textarea type="text" id="fpros"  name="fpros"></textarea>
        </div>
        <div>
          <label>CONS</label>
          <br />
          <textarea type="text" id="fcons"  name="fcons"></textarea>
        </div>
      </div>
    </form>
    <br />
    <button type="button" id="modalButton" onClick={props.hide}>SAVE POST</button>

  </div>
)

export default NewPostModal;