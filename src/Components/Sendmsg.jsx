import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { auth, db } from "../Firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

const Sendmsg = ({ scroll }) => {
  const [newText, setNewText] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newText.length < 1) {
      setInputError("Text cannot be Blank");
      return false;
    } else {
      setInputError("");
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: newText,
      senderID: uid,
      senderName: displayName,
      timeSent: serverTimestamp(),
    }).then(() => {
      setNewText("");
    });
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <form className=" flex items-center justify-around align-middle h-15 w-[99%] mx-auto bg-gray-500 p-3  bottom-0 mt-4">
      <input
        type="text"
        name="message"
        id=""
        placeholder="Message"
        className="w-[75%] ring-0 outline-none border-none rounded-md h-full p-2 placeholder:text-slate-300 placeholder:font-extralight text-center font-semibold"
        value={newText}
        onChange={(e) => {
          setNewText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="mx-auto  bg-green-800 text-white p-2 flex items-center gap-2 rounded-lg font-semibold"
      >
        <AiOutlineSend />
        Send
      </button>
      <p className="text-red-400 font-semibold">{inputError}</p>
    </form>
  );
};

export default Sendmsg;
