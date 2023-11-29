import React from "react";
import { Link } from "react-router-dom";
import Home from "../Feed/Home";

const Otp = () => {
  const focusNextInput = (e, prevId, nextId) => {
    if (e.target.value.length === 0) {
      document.getElementById(prevId).focus();
    } else {
      document.getElementById(nextId).focus();
    }
  };
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="px-4  flex-col">
          <Link to="/signup">
            <button className="py-3 mr-9">
              <i className="fa-solid fa-arrow-left text-white text-4xl scale-75"></i>
            </button>
          </Link>
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
          {[1, 2, 3, 4].map((index) => (
          <div key={`code-${index}`}>
            <label htmlFor={`code-${index}`} className="sr-only">
              {`${index === 1 ? 'First' : index === 6 ? 'Sixth' : `${index}th`} code`}
            </label>
            <input
              type="text"
              maxLength="1"
              onKeyUp={(e) => focusNextInput(e, `code-${index - 1}`, `code-${index + 1}`)}
              id={`code-${index}`}
              className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-100  focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none"
              required
            />
          </div>
        ))}
          </div>
          <div className="mx-auto text-sm mt-11">
            Didn't receive code?{" "}
            <strong className="text-blue-500">Resend code</strong>
          </div>
          <Link to="/home">
            <button className="py-3 my-6 w-full font-bold bg-white text-black rounded-full">
              Verify OTP
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Otp;
