import React from "react";

const Bookmark = ({ isBookmark }) => {
  return (
    <div>
      {isBookmark ? (
        <i className="fa-solid fa-bookmark text-blue-500"></i>
      ) : (
        <i className="fa-regular fa-bookmark"></i>
      )}
    </div>
  );
};

export default Bookmark;
