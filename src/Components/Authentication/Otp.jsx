import React from "react";
import { Link } from "react-router-dom"
import Home from "../Feed/Home"

const Otp = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="px-4  flex-col">
          <button className="py-3 mr-9">
            <i className="fa-solid fa-arrow-left text-white text-4xl scale-75"></i>
          </button>
        </div>
        <div className="flex flex-col px-8">
          <p className="pt-2 text-2xl font-bold" c>
            Verify Phone
          </p>
          {/* Instruction */}
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Please enter the one time password sent on your registered email.
          </p>
          {/* OTP */}
          <div className="flex mx-auto mt-16 space-x-6 rtl:space-x-reverse">
            <div>
              <label for="code-1" className="sr-only">
                First code
              </label>
              <input
                type="text"
                maxlength="1"
                onkeyup="focusNextInput(this, 'code-1', 'code-2')"
                id="code-1"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label for="code-2" className="sr-only">
                Second code
              </label>
              <input
                type="text"
                maxlength="1"
                onkeyup="focusNextInput(this, 'code-1', 'code-3')"
                id="code-2"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label for="code-3" className="sr-only">
                Third code
              </label>
              <input
                type="text"
                maxlength="1"
                onkeyup="focusNextInput(this, 'code-2', 'code-4')"
                id="code-3"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label for="code-4" className="sr-only">
                Fourth code
              </label>
              <input
                type="text"
                maxlength="1"
                onkeyup="focusNextInput(this, 'code-3', 'code-5')"
                id="code-4"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
          </div>
          <div className="mx-auto text-sm mt-11">Didn't receive code? <strong className="text-blue-500">Resend code</strong></div>
          
          <button className="py-3 my-6 w-full font-bold bg-white text-black rounded-full">
            <Link to="/home">Verify OTP</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Otp;
