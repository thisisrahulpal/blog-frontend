const signup = () => {
  return (
    <>
    <div className="flex px-4 items-center">
      <button className="py-1 mr-9">
        <i className="fas fa-xmark text-white text-4xl scale-75"></i>
      </button>
      <div className="py-3">
        <p className="font-robot text-xl font-bold">Step 1 of 5 </p>
      </div>
    </div>
    <div className="px-8">
    <p className="my-5 text-2xl font-bold" >
    Create your account
    </p>
    <div className="py-3">
    <input className="p-3 py-4 w-full  font-roboto rounded border bg-black border-gray-600/75" type="text" placeholder="Name"/>
    </div>
    <div className="py-3">
    <input className="p-3 py-4 w-full  font-roboto rounded border bg-black border-gray-600/75" type="text" placeholder="Email"/>
    </div>
    </div>
    </>
    
  );
};

export default signup;
