import React, { useRef } from "react";
import Header from "./Header";
import "../App.css";
import { checkValidData } from "../utility/Utils";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utility/firebase";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handlePressSubmit =  () => {
    const message = checkValidData(
      emailRef?.current.value,
      passwordRef?.current.value,
     !isSigninForm && nameRef?.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (isSigninForm) {
      console.log("Sign in");
      signInWithEmailAndPassword(
        auth,
        emailRef?.current.value,
        passwordRef?.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "SIGN IN");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      console.log("Signup Form");
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current.value,
        passwordRef?.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "Ahmed hereeee");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const handlePressToggle = () => {
    setErrorMessage(null);
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute z-1 loginBG">
        <img
          className="object-cover loginBGImage"
          sizes="cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/e1a226fa-a69c-4bb8-a028-57187cc2d894/PK-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="formWrapper">
        <div className="relative  w-3/12 z-10 bg-black flex flex-col px-10 py-10 text-white">
          <h2 className="text-3xl">{isSigninForm ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isSigninForm && (
              <input
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                className="p-2 my-2 w-full  text-black"
              />
            )}
            <input
              ref={emailRef}
              type="text"
              placeholder="Email Address"
              className="p-2 my-2 w-full text-black"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-2 my-2 w-full  text-black"
            />
            <button
              className="p-2 c w-full border-2"
              onClick={handlePressSubmit}
            >
              {isSigninForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p>{errorMessage}</p>
          <button onClick={handlePressToggle}>
            {isSigninForm ? "Create New Account" : "Already a user"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
