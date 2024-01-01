import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../features/userApiSlice";
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
        const data = {
          name,
          email,
          userName: username,
          password,
        };
        console.log(data);
        const res = await register(data).unwrap();
        navigate("/verifyOtp")
        setEmail("");
        setName("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        {/* Header */}
        {isLoading ? (
          <div className="fixed  flex items-center justify-center  bg-opacity-50 z-50">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : null}

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
    </>
  );
};

export default signup;
