import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/userApiSlice";
import Loader from "../Util/Loader";
import { setCredentials } from "../../features/authSlice";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email,
        password,
      }).unwrap();

      console.log("🚀 ~ res:", res);
      dispatch(setCredentials({ ...res.data }))
      navigate("/home");
      // setEmail("");
      // setName("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* Header */}
      {isLoading ? <Loader /> : null}

      <form
        className="flex flex-col justify-between h-screen"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="flex px-4 py-1 items-center">
            <Link to="/">
              <button className="py-1 mr-9">
                <i className="fas fa-xmark text-white text-4xl scale-75"></i>
              </button>
            </Link>

            <div className="pl-20">
              <i className="fa-brands fa-x-twitter fa-2xl opacity-90"></i>
            </div>
          </div>
          <div className="flex flex-col px-8">
            <div className="">
              {/* input fields */}
              <p className="mt-24 text-3xl font-bold">Sign in to X</p>

              <div className="pt-10 pb-4">
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

                <p className="ml-2 mt-1 text-sm text-blue-400">
                  Forgot password?
                </p>
              </div>
            </div>
            <div className="mt-16">
              <p className="ml-10 mt-20 flex text-sm text-gray-400/75">
                Don't have an account?{" "}
                <button className="ml-1 text-blue-400">Sign up</button>
              </p>
              <button
                className="py-3 my-6 w-full bg-white font-bold text-black rounded-full"
                type="submit"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default signup;
