import React from "react";
import "../Game/Item.css";
import { useCallback } from "react";

const Item = (props) => {
  const { votes, text, upVote, downVote } = props;
  const getEmoji = useCallback((votes) => {
    if (votes >= 9) {
      return '😅'
    } else if (votes > 6) {
      return '😆';
    } else if (votes >= 3) {
      return '😃';
    } else if (votes >= 0) {
      return '🙂';
    } else {
      return '😑';
    }
  }, []);
  return (
    <div className="item">
      <div className="itemBtn">
        <svg
          onClick={upVote}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
        <h1 className="voteLevel">{votes}</h1>
        <svg
          onClick={downVote}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </div>
      <div className="title">
        <h2>{text}</h2>
      </div>
      <div className="itemEmoji">{getEmoji(votes)}</div>
    </div>
  );
};

export default Item;
