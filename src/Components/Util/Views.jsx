import React from "react";

const Views = ({count}) => {
  return (
    <div className="flex space-x-1 items-center">
      <i className="fa-solid fa-chart-simple"></i>
      <p className="text-sm">{count}</p>
    </div>
  );
};

export default Views;
