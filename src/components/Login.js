import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          alt="background image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="text-3xl font-bold my-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-2 w-full bg-gray-900 rounded-md border border-white-100"
          ></input>
        )}

        <input
          type="text"
          placeholder="Email or Mobile number"
          className="my-2 p-2 w-full bg-gray-900 rounded-md border border-white-100"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="my-2 p-2 w-full bg-gray-900 rounded-md border border-white-100"
        ></input>
        <button className="p-2 my-2 bg-red-700 w-full hover:bg-red-800 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center p-2 m-2">OR</p>
        <button className="p-2 my-2 bg-gray-700 hover:bg-gray-800 w-full rounded-md">
          {isSignInForm ? "Use a sign in code" : "Use a sign up code"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already Registered sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
