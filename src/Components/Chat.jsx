import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../Firebase";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import Sendmsg from "./Sendmsg";

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const queryData = query(collection(db, "messages"), orderBy("timeSent"));
    const unsub = onSnapshot(queryData, (querySnapshot) => {
      let dbMessages = [];
      querySnapshot.forEach((doc) => {
        dbMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(dbMessages);
    });

    return () => unsub();
  }, []);

  if (user === null) return <h1>Please Log in </h1>;

  return (
    <div className="relative bg-red-50 flex flex-col gap-1 ">
      <main className="flex flex-col p-1 relative">
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              msgContent={message.text}
              senderName={message.senderName}
              sender={user.uid === message.senderID ? "sent" : "received"}
            />
          ))}
        <Sendmsg scroll={scroll} />
      </main>
      <span className="absolute bottom-0 z-10 mt-10" ref={scroll}></span>
    </div>
  );
};

export default Chat;
