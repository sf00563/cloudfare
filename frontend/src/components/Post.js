import React from 'react';
import '../App.css';

function Post(props) {
  return (
    <div className="post">
      <div>
        <h3>{props.postTitle}</h3>
        <h4>User: {props.name}</h4>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default Post;