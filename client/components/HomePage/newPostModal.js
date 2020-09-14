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
      <hr />
      <div id="modalFlex">
        <div>
          <label id="fpros">PROS</label>
          <br />
          <textarea type="text"   name="fpros"></textarea>
        </div>
        <div>
          <label id="fcons">CONS</label>
          <br />
          <textarea type="text"   name="fcons"></textarea>
        </div>
      </div>
    </form>
    <br />
    <button type="button" id="modalButton" onClick={props.hide}>SAVE POST</button>
  </div>
)

export default NewPostModal;