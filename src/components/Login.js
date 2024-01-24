import React from "react";
import Header from "./Header";
import "../App.css";

const Login = () => {
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
        <form className="relative z-10 bg-black flex flex-col">
          <input type="text" placeholder="Email Address" className="p-2 m-2" />
          <input type="password" placeholder="Password" className="p-2 m-2" />
          <button className="p-2 m-2">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
