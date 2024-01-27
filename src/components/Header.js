import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  console.log(userData, "userDatauserDatauserData");
  const handleClickSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
      <img
        className="w-52 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {userData && (
        <div>
          <h4>{userData?.displayName}</h4>
          <img className="w-52 " src={userData?.photoURL} alt="User Image" />
          <button
            onClick={() => handleClickSignout()}
            className="bg-red-600 px-6 py-2 rounded text-white font-bold"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
