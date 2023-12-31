import React from "react";

const Like = ({ count, isLike, id, likedPost }) => {
  return (
    <button
      onClick={() => likedPost({ id, isLike: !isLike })}
      className="flex space-x-1 items-center"
    >
      {isLike ? (
        <i className="fa-solid fa-heart text-blue-500"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}

      <p className="text-sm">{count}</p>
    </button>
  );
};

export default Like;
