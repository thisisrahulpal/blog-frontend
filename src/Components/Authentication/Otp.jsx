import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useVerfiyOtpMutation } from "../../features/userApiSlice";
import { setCredentials } from "../../features/authSlice";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const { unverifiedUser } = useSelector((state) => state.auth);
  const [verifyOtp, { isLoading }] = useVerfiyOtpMutation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const focusNextInput = (e, prevId, nextId) => {
    setOtp(otp + e.target.value);
    const prevInput = document.getElementById(prevId);
    const nextInput = document.getElementById(nextId);

    if (prevInput && e.target.value.length === 0) {
      prevInput.focus();
    } else if (nextInput) {
      nextInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOtp({ email: unverifiedUser, otp });
      console.log("res", res);
      dispatch(setCredentials({ ...res.data }));
      navigate("/home/foryou");
    } catch (error) {
      console.log("error: ", error);
    }
    console.log("unverifiedUser", unverifiedUser);
    console.log("opt: ", otp);
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="px-4  flex-col">
        <Link to="/signup">
          <button className="py-3 mr-9">
            <i className="fa-solid fa-arrow-left text-white text-4xl scale-75"></i>
          </button>
        </Link>
      </div>
      <div className="flex flex-col px-8">
        <p className="pt-2 text-2xl font-bold">Verify Phone</p>
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
                {`${
                  index === 1 ? "First" : index === 6 ? "Sixth" : `${index}th`
                } code`}
              </label>
              <input
                type="text"
                maxLength="1"
                onKeyUp={(e) =>
                  focusNextInput(e, `code-${index - 1}`, `code-${index + 1}`)
                }
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

        <button
          className="py-3 my-6 w-full font-bold bg-white text-black rounded-full"
          type="submit"
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
};

export default Otp;
