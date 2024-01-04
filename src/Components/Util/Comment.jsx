import React from "react";

const Comment = ({count}) => {
  return (
    <div className="flex space-x-1 items-center">
      <i className="fa-regular fa-comment"></i>
      <p className="text-sm">4.4K</p>
    </div>
  );
};

export default Comment;
