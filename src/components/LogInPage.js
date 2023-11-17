import React, { useRef, useState } from "react";
import Header from "./Header";
import { cheackErrorMessage } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constents";
import { AVATAR_URL } from "../utils/constents";

function LogInPage() {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState(true);
  const [errormessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleValidation = () => {
    const ValidationCheck = cheackErrorMessage(
      email.current.value,
      password.current.value
    );
    // console.log(ValidationCheck);
    setErrorMessage(ValidationCheck);

    if (ValidationCheck === "Proccess Successfull") return;

    if (!logIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.ValidationCheck);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const hendleLonIn = () => {
    setLogIn(!logIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={PHOTO_URL}
          alt=""
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute p-10 bg-opacity-80 rounded-md px-20 top-0 mx-[30rem] my-[5rem] bg-black w-[28rem] h-[40rem]"
        >
          <div className="flex flex-col">
            <h1 className="text-white mb-6 font-semibold text-4xl">
              {logIn ? "Sign In" : "Sign up"}
            </h1>

            {!logIn && (
              <input
                ref={name}
                type="text"
                className="text-white mb-7 rounded-sm w-full p-3 bg-gray-800"
                placeholder="First Name"
              />
            )}
            <input
              ref={email}
              className="text-white mb-7 rounded-sm w-full p-3 bg-gray-800"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              ref={password}
              className="text-white mb-5 rounded-sm w-full p-3 bg-gray-800"
              type="password"
              placeholder="password"
            />
            <p className="text-red-500 mb-3">{errormessage}</p>
            <button
              className="bg-red-800 rounded-sm text-white mb-4 w-full p-3 mt-4"
              onClick={handleValidation}
            >
              {logIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <input type="checkbox" id="Remember" />
              <small className="text-white mx-3">Remember me</small>
            </div>
            <small className="text-white">Need help?</small>
          </div>
          <div>
            <h3
              className="text-white mt-15 mb-8 cursor-pointer"
              onClick={hendleLonIn}
            >
              {logIn
                ? "New to Netflix? Sign up now"
                : "Already Registerd? Sign In"}
            </h3>
            <small className="text-gray-500 mt-6">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
