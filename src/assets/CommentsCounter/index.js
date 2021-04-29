import React, { useState } from "react";
import "./styles.scss";
import { useCounter } from "../LikesCounter/useCounter";

export const CommentsCounter = () => {
  const { counter, increase, decrease } = useCounter(0);
  const [comments, setComments] = useState(true);

  const increaseCommentAmount = () => {
    setComments((prevCommentAmount) => {
      return !prevCommentAmount;
    });

    comments ? increase() : decrease();
  };
  return (
    <>
      <i className="fa fa-comment" onClick={increaseCommentAmount}>
        <span>{counter}</span>
      </i>
    </>
  );
};
