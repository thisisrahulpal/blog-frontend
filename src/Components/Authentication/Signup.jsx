const signup = () => {
  return (
    <>
      {/* Header */}
      <div className="flex px-4 items-center">
        <button className="py-1 mr-9">
          <i className="fas fa-xmark text-white text-4xl scale-75"></i>
        </button>
        <div className="py-3">
          <p className="font-robot text-xl font-bold">Step 1 of 5 </p>
        </div>
      </div>
      <div className="px-8">
      {/* input fields */}
        <p className="my-5 text-2xl font-bold">Create your account</p>
        <div className="py-3">
          <input
            className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-400 font-roboto rounded border bg-black border-gray-600/75  "
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="py-3">
          <input
            className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-400 font-roboto rounded border bg-black border-gray-600/75  "
            type="text"
            placeholder="Email"
          />
        </div>
        {/* data of birth */}
      <div className="pt-6 mb-2 font-robot text-lg font-bold">
        Date of birth
      </div>
      <p className="text-xs text-gray-400/75">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
      </div>
      
    </>
  );
};

export default signup;
