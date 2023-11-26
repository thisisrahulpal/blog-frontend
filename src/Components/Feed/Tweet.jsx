import React from "react";
import tweetDp from "../../assets/faces/user-dp.jpeg";
import { BiSolidBadgeCheck } from "react-icons/bi";

const Tweet = () => {
  return (
    <>
      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>
              Big companies steadily increase their Dilbert score over time like
              entropy
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>If you want maximum global reach, use this platform
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>It’s not me, it’s the RNG
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>
            This past week, there were hundreds of bogus media stories claiming that I am antisemitic. 
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>
            Looks like http://Instability.AI is still available
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>
            At risk of stating the obvious, anyone advocating the genocide of *any* group will be suspended from this platform
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 pt-3 flex flex-rowpx-4 border-b border-gray-700/75">
        {/* DP */}
        <div className="w-10 h-10 mr-3">
          <img className="rounded-full" src={tweetDp} alt="" />
        </div>
        <div className="w-full pb-3 ">
          {/* Head */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-md font-bold pr-1">Rahul Pal</p>
              <BiSolidBadgeCheck className="text-blue-400 scale-125"/>
              <p className="font-roboto text-md text-gray-500 pl-1">@rahulpal</p>
              <p className="font-roboto text-md text-gray-500 px-1">.</p>
              <p className="font-roboto text-md text-gray-500">1h</p>
            </div>
            <div>
              <i className="fa-solid fa-ellipsis fa-md text-gray-500"></i>
            </div>
          </div>
          {/* Body */}
          <div className="font-roboto text-base opacity-90">
            <p>
            Many of the largest advertisers are the greatest oppressors of your right to free speech.
            </p>   
          </div>
          {/* buttons */}
          <div className="flex justify-between py-2 w-full  opacity-90 text-gray-400">
            {/* comments */}
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-comment"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-retweet"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-regular fa-heart"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div className="flex space-x-1 items-center">
            <i class="fa-solid fa-chart-simple"></i>
            <p className="text-sm">4.4K</p>
            </div>
            <div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
