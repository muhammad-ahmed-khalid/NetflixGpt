import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utility/userSlice";
import { toggleGPT } from "../utility/gptSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../constants/constants";
import { selectedLangugage } from "../utility/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user);
  const isShowLang = useSelector((state) => state.gptSlice.isShowGPT);

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          console.log(user , "User is signed in");
          dispatch(addUser({uid, email, displayName, photoURL}))
          navigate("/browse")
        } else {
          console.log("User is signed out");
          dispatch(removeUser())
          navigate("/")
        }
      });

      return () => unsubscribe();
},[])

  const handleClickSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePressToggle = () => {
    dispatch(toggleGPT())
  }
  const handleLangugageChange = (lang) => {
    console.log(lang, "langlanglanglanglanglang")
    dispatch(selectedLangugage(lang))
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black flex-row flex justify-between align-bottom w-full z-50">
      <button onClick={() => navigate("/")}>
      <img
        className="w-52 h-28"
        src={LOGO}
        alt="Logo"
      />
      </button>
      {userData && (
        <div className="flex flex-row items-center">
          {isShowLang && 
             <select onChange={(e) => handleLangugageChange(e.target.value)} className="bg-teal-500 border-white border-2 px-6 py-2 rounded text-white font-bold h-auto mr-4">
             {SUPPORTED_LANGUAGE.map((item) => (
               <option key={item?.idetity} value={item?.idetity}>{item?.langName}</option>
             ))}
           </select>
          }
          <button className="bg-teal-500 px-6 py-2 rounded text-white font-bold h-auto mr-8" onClick={() => handlePressToggle()}>
           {isShowLang ? "Go Back" : "GPT Search"} 
          </button>
          <img className="w-16 h-w-16 rounded-full mr-4" src={userData?.photoURL} alt="User Image" />
          <button
            onClick={() => handleClickSignout()}
            className="bg-red-600 px-6 py-2 rounded text-white font-bold h-auto"
          >
            Sign out ( {userData?.displayName} )
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
