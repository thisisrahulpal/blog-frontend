import React, { useEffect, useState } from "react";
import tweetDp from "../../assets/faces/user-dp.jpeg";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Skeleton from "../Util/Skeleton";
import Like from "../Util/Like";
import Comment from "../Util/Comment";
import Retweet from "../Util/Retweet";
import Views from "../Util/Views";
import Bookmark from "../Util/Bookmark";
import {
  useBookmarkPostMutation,
  useGetForYouPostQuery,
  useLikedPostMutation,
  useRetweetPostMutation,
} from "../../features/postApiSlice";
import { useUpdatePostMutation } from "../../features/postApiSlice";

const Foryou = () => {
  const [likedPost] = useLikedPostMutation();
  const [retweetPost] = useRetweetPostMutation();
  const [bookmarkPost] = useBookmarkPostMutation();
  const { data, isError, isLoading, error } = useGetForYouPostQuery();


  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : isError ? (
        <div>No data available.</div>
      ) : (
        data.map((postData, index) => (
          <div
            key={postData._id}
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
                  <p className="text-sm font-bold  pr-1">{postData.name}</p>
                  <BiSolidBadgeCheck className="text-blue-400 scale-125" />
                  <p className="font-roboto text-sm text-gray-500 pl-1">
                    {postData.username}
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
                <p>{postData.post}</p>
              </div>
              {/* buttons */}
              <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
                {/* comments */}
                <Comment />
                <Retweet
                  isRetweet={postData.isRetweet}
                  count={postData.reTweetCount}
                  onRetweet={retweetPost}
                  id={postData._id}
                />
                <Like
                  count={postData.likeCount}
                  isLike={postData.isLike}
                  id={postData._id}
                  likedPost={likedPost}
                />
                <Views count={postData.viewCount} />
                <Bookmark
                  isBookmark={postData.isBookmark}
                  bookmarkPost={bookmarkPost}
                  id={postData._id}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Foryou;
