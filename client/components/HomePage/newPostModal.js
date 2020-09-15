import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const mapStateToProps = (state) => ({
  currentUserId: state.yetiReducer.currentUserId,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (info) => dispatch(actions.addPost(info)),
});


const NewPostModal = (props) => {

  const wrapperFunction = () => {
    const title = document.getElementById('ftitle').value;
    const pros = document.getElementById('fprosValue').value;
    const cons = document.getElementById('fconsValue').value;
    const info = {
      userId: props.currentUserId,
      title,
      pros,
      cons
    };
    console.log('inside modal wrapper', info)
    props.hide();
    return props.addPost(info);

  };

  return (
    <div id="newPostModal">
      {/* Input Fields -> Title, Pros, Cons */}

      <form id="modalInterior" method="post">
        <div id="modalTitle">
          <label>TITLE</label>
          <br />
          <input type="text" id="ftitle"  name="ftitle" placeholder="What's on your mind?"></input>
        </div>
        <hr />
        <div id="modalFlex">
          <div>
            <label id="fpros">PROS</label>
            <br />
            <textarea type="text" id="fprosValue" name="fpros"></textarea>
          </div>
          <div>
            <label id="fcons">CONS</label>
            <br />
            <textarea type="text" id="fconsValue" name="fcons"></textarea>
          </div>
        </div>
      </form>
      <br />
      <button type="button" id="modalButton" onClick={wrapperFunction}>SAVE POST</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostModal);