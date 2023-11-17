import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constents";
import { showGptSearchBox } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const laguageBTnShow = useSelector((store) => store.gpt.toggleGptsearchBox)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleChangeLang = (e)=>{

    dispatch(changeLanguage(e.target.value))

  }

  const handletoggleClick = () => {
    dispatch(showGptSearchBox());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="flex justify-between absolute w-[100vw] bg-gradient-to-b from-black z-10">
      <img className="w-[12rem] ml-8" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex">
          <button
            className="border border-white text-white bg-transparent hover:text-purple-950 hover:bg-white rounded-lg font-semibold w-[8rem] h-8 mr-4 m-auto "
            onClick={handletoggleClick}
          >
            GPT-Search
          </button>
          { laguageBTnShow && (<select className="m-auto p-1" onChange={handleChangeLang}>
           {
            SUPPORTED_LANGUAGE.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>
            ))
           }
          </select>)}
          <h1 className="text-white ml-2 hover:text-yellow-500 p-1 rounded-lg font-bold text-lg m-auto">
            {user?.displayName}
          </h1>
          <img
            className="w-11 h-11 rounded-[50%] items-center m-auto mx-4"
            src={user?.photoURL}
            alt="user icon"
          />
          <button
            className="font-bold bg-red-800 mr-8 rounded-lg cursor-pointer hover:bg-red-400 hover:text-black m-auto text-white p-2"
            onClick={handleSignOut}
          >
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
