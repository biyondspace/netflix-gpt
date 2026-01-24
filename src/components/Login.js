import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data

    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    //SignIn & SingUp Logic
    if (!isSignInForm) {
      //SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // password=King@12345_
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/RO-en-20251222-TRIFECTA-perspective_e192f222-ba7e-4843-adfe-260fc3fc9762_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/RO-en-20251222-TRIFECTA-perspective_e192f222-ba7e-4843-adfe-260fc3fc9762_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/RO-en-20251222-TRIFECTA-perspective_e192f222-ba7e-4843-adfe-260fc3fc9762_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/RO-en-20251222-TRIFECTA-perspective_e192f222-ba7e-4843-adfe-260fc3fc9762_small.jpg 959w"
          alt="background Image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="text-3xl font-bold my-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 p-2 w-full bg-gray-900 rounded-md border border-white-100"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile number"
          className="my-2 p-2 w-full bg-gray-900 rounded-md border border-white-100"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-2 w-full bg-gray-900 rounded-md border border-white-100"
        ></input>
        <p className="text-red-400 font-bold">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-red-700 w-full hover:bg-red-800 rounded-md"
          onClick={handleButtonClick}
        >
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
