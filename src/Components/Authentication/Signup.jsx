import { useState } from "react";
import { Link } from "react-router-dom";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name is: ", name);
    console.log("email is: ", email);
    setEmail("");
    setName("");
  };
  return (
    <>
      {/* Header */}
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
          <div className="flex flex-col ">
            <div className="px-8">
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
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* data of birth */}
              <div className="pt-11 mb-2 font-robot text-lg font-bold">
                Date of birth
              </div>
              <p className="text-xs text-gray-400/75">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <div className="relative mt-3">
                <input
                  className="p-3 py-4 w-full border  bg-black border-gray-600/75 rounded focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto"
                  type="Date"
                  placeholder="Date of birth"
                />
                <span className="absolute inset-y-0 -bottom-1/4 right-3 pl-3 flex items-center pointer-events-none">
                  <i className="fa-regular fa-calendar text-white"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center px-8">
          <button
            className="py-3 my-6 w-full bg-white font-bold text-black rounded-full"
            type="submit"
          >
            <Link to="/verifyOtp">Next</Link>
          </button>
        </div>
    </>
  );
};

export default signup;
