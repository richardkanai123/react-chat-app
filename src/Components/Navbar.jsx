import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsChatSquareFill } from "react-icons/bs";
import { auth } from "../Firebase";
import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const provider = new GoogleAuthProvider();
  function HandleLogIn() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  }
  function HandleLogOut() {
    signOut(auth).then((result) => {
      console.log(result);
    });
  }

  return (
    <div className="flex justify-between items-center h-20 w-full p-4  bg-lime-400">
      <h1 className="font-bold text-gray-700 text-2xl flex items-center gap-2">
        <BsChatSquareFill />
        AppChat
      </h1>
      {user ? (
        <button
          className="p-3 flex gap-3 items-center align-middle bg-gray-700 rounded-lg text-white  text-lg"
          onClick={HandleLogOut}
        >
          <img
            src={user ? user.photoURL : ""}
            width={20}
            height={20}
            className="rounded-full"
          />
          Log Out
        </button>
      ) : (
        <button
          className="p-2 flex gap-3 items-center bg-gray-700 rounded-lg text-white font-bold text-lg "
          onClick={HandleLogIn}
        >
          <FcGoogle />
          Log In With Google
        </button>
      )}
    </div>
  );
};

export default Navbar;
