import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Welcome = () => {
  const responseMessage = (response) => {
    const token = response.credential;
    const decode = jwtDecode(token);
    console.log("data:::", decode);
  };
  const errorMessage = (response) => {
    console.log("response:", response);
  };

  return (
    <>
      {/* cover container */}
      <div className="p-4 ">
        {/* main */}
        <div className="flex-grow">
          <div className="p-5 opacity-90">
            <div>
              {/* icon */}
              <div className="py-4">
                <i className="pl-2 pb-2 fa-brands fa-twitter fa-2xl opacity-90 scale-150"></i>
              </div>
              {/* banner */}
              <div className="my-10">
                <p className="font-prompt text-5xl font-bold">
                  Happening <br /> now{" "}
                </p>
              </div>
              <div className="mb-5">
                <p className="font-prompt text-2xl font-bold">Join today.</p>
              </div>
              {/* sign in with google */}
              <div className="flex w-full">
                <div className="my-4 mx-auto">
                  <GoogleLogin
                    theme="outline"
                    shape="circle"
                    onSuccess={responseMessage}
                    onError={errorMessage}
                  />
                </div>
              </div>

              {/* separater line */}
              <div className="flex flex-row items-center">
                <div className="w-full h-px bg-gray-600/75"></div>
                <p className="px-2">or</p>
                <div className="w-full h-px bg-gray-600/75"></div>
              </div>
              {/* create account */}
              <Link to="/signup">
                <button
                  className="py-2 mt-4 mb-1 w-full bg-sky-500 font-bold  rounded-full"
                  type="submit"
                >
                  Create account
                </button>
              </Link>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="px-5 mt-4">
          <div className="p-1 font-roboto font-bold">
            Already have an account?
          </div>
          <Link to="/login">
            <button
              className="py-2 mt-2 mb-11 w-full border text-sky-500  border-gray-600 font-bold  rounded-full"
              type="submit"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
