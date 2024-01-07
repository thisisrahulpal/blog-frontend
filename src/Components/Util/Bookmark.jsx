import React from "react";

const Bookmark = ({ id, isBookmark, bookmarkPost }) => {
  return (
    <button  onClick={() => bookmarkPost({ id, isBookmark: !isBookmark })} >
      {isBookmark ? (
        <i className="fa-solid fa-bookmark text-blue-500"></i>
      ) : (
        <i className="fa-regular fa-bookmark"></i>
      )}
    </button>
  );
};

export default Bookmark;
