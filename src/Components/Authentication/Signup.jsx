import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../features/userApiSlice";
import { unverifiedCredentials } from "../../features/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Loader from "../Util/Loader"
// import { setCredentials } from "../../features/authSlice";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [unmatchPassword, setUnmatchPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setUnmatchPassword(true);
      } else {
        setUnmatchPassword(false);
        dispatch(unverifiedCredentials(email));
        const res = await register({
          name,
          email,
          username,
          password,
        }).unwrap();
        navigate("/verifyOtp");
        setEmail("");
        setName("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.error);
    }
  };
  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        {/* Header */}
        {isLoading ? <Loader/> : null}

        <form
          className="flex flex-col justify-between h-screen"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="flex px-4 items-center">
              <Link to="/">
                <button className="py-1 mr-9">
                  <i className="fas fa-xmark text-white text-4xl scale-75"></i>
                </button>
              </Link>

              <div className="py-3">
                <p className="font-robot text-xl font-bold">Step 1 of 2</p>
              </div>
            </div>
            <div className="flex flex-col px-8">
              <div className="">
                {/* input fields */}
                <p className="my-5 text-2xl font-bold">Create your account</p>
                <div className="py-3">
                  <input
                    className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="py-3">
                  <input
                    className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="py-3">
                  <input
                    className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="py-3">
                  <input
                    className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="py-3">
                  <input
                    className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {unmatchPassword ? (
                    <p className="pt-1 text-xs text-red-500">
                      Password does not match
                    </p>
                  ) : null}
                </div>
                {/* data of birth */}
                {/* <div className="pt-11 mb-2 font-robot text-lg font-bold">
                  Date of birth
                </div> */}
                <p className="text-xs text-gray-400/75">
                  This will not be shown publicly. Confirm your own info, even
                  if this account is for a business, a pet, or something else.
                </p>
                {/* <div className="relative mt-3">
                  <input
                    className="p-3 py-4 w-full border  bg-black border-gray-600/75 rounded focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto"
                    type="Date"
                    placeholder="Date of birth"
                    onChange={(e) => setDate(e.target.value)}
                  /> */}
                {/* <span className="absolute inset-y-0 -bottom-1/4 right-3 pl-3 flex items-center pointer-events-none">
                    <i className="fa-regular fa-calendar text-white"></i>
                  </span> */}
                {/* </div> */}
              </div>
              <div className="mt-3">
                {/* <Link to="/verifyOtp"> */}
                <button
                  className="py-3 my-6 w-full bg-white font-bold text-black rounded-full"
                  type="submit"
                >
                  Next
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          {/* <div className="px-8"></div> */}
        </form>
      </div>
      <ToastContainer position="top-center" hideProgressBar theme="dark" />
    </>
  );
};

export default signup;
