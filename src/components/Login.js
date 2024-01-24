import React from "react";
import Header from "./Header";
import "../App.css";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = React.useState(true);
  const handlePressToggle = () => {
    setIsSigninForm(!isSigninForm);
  }
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
       <h2 className="text-3xl">{isSigninForm? "Sign In" : "Sign Up"}</h2>
        <form >
          {!isSigninForm &&  <input type="text" placeholder="Full Name" className="p-2 my-2 w-full" />}
          <input type="text" placeholder="Email Address" className="p-2 my-2 w-full" />
          <input type="password" placeholder="Password" className="p-2 my-2 w-full" />
          <button className="p-2 c w-full border-2">{isSigninForm ? "Sign In" : "Sign Up"}</button>
        </form>
        <button onClick={handlePressToggle}>{isSigninForm ? "Create New Account" : "Already a user"}</button>
       </div>
      </div>
    </div>
  );
};

export default Login;
