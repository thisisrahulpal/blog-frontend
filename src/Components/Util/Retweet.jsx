import React from "react";

const Retweet = ({ count, isRetweet, id, onRetweet }) => {
  return (
    <button onClick={() => onRetweet(id)} className="flex space-x-1 items-center">
      {isRetweet ? (
        <i className="fa-solid fa-retweet text-blue-500"></i>
      ) : (
        <i className="fa-solid fa-retweet"></i>
      )}
      <p className="text-sm">{count}</p>
    </button>
  );
};

export default Retweet;
