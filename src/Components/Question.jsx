import React from "react";
import "../style/question.css";

const Question = ({ user, description, comments }) => {
  const addComment = () => {};

  return (
    <div className="questionBox">
      <div className="user">
        <p>{user}</p>
      </div>
      <div className="question">
        <p>{description}</p>
      </div>
      <div className="comments">
        <div className="comment">{comments}</div>
        <button onClick={addComment} className="commentButton">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Question;
