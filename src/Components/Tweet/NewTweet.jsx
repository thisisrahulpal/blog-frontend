import React from "react";
import { Link } from "react-router-dom";
import tweetDp from "../../assets/faces/user-dp.jpeg";
import { BiSolidBadgeCheck } from "react-icons/bi";

const NewTweet = () => {
  return (
    <>
      <div className="flex items-center mt-1 justify-between px-4">
        <Link to="/home">
          <button className="mr-9 px-1 py-3">
            <i class="fa-solid fa-arrow-left text-gray-200"></i>
          </button>
        </Link>

        <Link to="/home">
          <button className="w-16 h-8 rounded-full bg-blue-400 font-roboto text-sm font-bold">
            Post
          </button>
        </Link>
      </div>

      <div className="px-4 pt-3 flex flex-rowpx-4 border-gray-700/75">
        {/* DP */}
        <div className="w-14 h-14 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          <input
            className="bg-black text-xl p-2 focus:outline-none border-none"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
      </div>
    </>
  );
};

export default NewTweet;
