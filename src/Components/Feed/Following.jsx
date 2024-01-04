import React, { useEffect, useState } from "react";
import tweetDp from "../../assets/faces/user-dp.jpeg";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Skeleton from "../Util/Skeleton";
import Like from "../Util/Like";
import Comment from "../Util/Comment";
import Retweet from "../Util/Retweet";
import Views from "../Util/Views";
import Bookmark from "../Util/Bookmark";
import { following } from "../../assets/Data/posts";

const Foryou = () => {
  const [data, setData] = useState(following);

  const handleLike = (_id) => {
    const likedPost = data.find((post) => post._id == _id);

    const updatedData = data.map((post) =>
      post._id === likedPost._id
        ? {
            ...post,
            isLike: !post.isLike,
            likeCount: post.isLike ? post.likeCount - 1 : post.likeCount + 1,
          }
        : post
    );
    console.log("🚀 ~ updatedData:", updatedData);
    setData(updatedData);
    return;
  };

  const handleRetweet = (_id) => {
    const retweetedPost = data.find((post) => post._id == _id);

    const updatedData = data.map((post) =>
      post._id === retweetedPost._id
        ? {
            ...post,
            isRetweeted: !post.isRetweeted,
            retweetCount: post.isRetweeted
              ? post.retweetCount - 1
              : post.retweetCount + 1,
          }
        : post
    );
    console.log("🚀 ~ updatedData:", updatedData);
    setData(updatedData);
    return;
  };

  return (
    <>
      {/* <Skeleton /> */}
      {data.map((data, index) => (
        <div
          key={data._id}
          className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75"
        >
          {/* DP */}
          <div className="w-10 h-10 mr-3">
            <img className="rounded-full" src={tweetDp} alt="" />
          </div>
          <div className="w-full pb-3 ">
            {/* Head */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-md font-bold pr-1">{data.name}</p>
                <BiSolidBadgeCheck className="text-blue-400 scale-125" />
                <p className="font-roboto text-md text-gray-500 pl-1">
                  {data.username}
                </p>
                <p className="font-roboto text-md text-gray-500 px-1">.</p>
                <p className="font-roboto text-md text-gray-500">1h</p>
              </div>
              <div>
                <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
              </div>
            </div>
            {/* Body */}
            <div className="font-roboto text-base opacity-90">
              <p>{data.tweet}</p>
            </div>
            {/* buttons */}
            <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
              {/* comments */}
              <Comment />
              <Retweet
                isRetweet={data.isRetweeted}
                count={data.retweetCount}
                onRetweet={handleRetweet}
                id={data._id}
              />
              <Like
                count={data.likeCount}
                isLike={data.isLike}
                id={data._id}
                onLiked={handleLike}
              />
              <Views count={data.viewCount} />
              <Bookmark isBookmark={data.isBookmark} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Foryou;
