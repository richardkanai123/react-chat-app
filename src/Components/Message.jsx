import React from "react";

const styles = {
  sent: `bg-sky-300  mt-2 w-[49%]  shadow-xl px-3 py-2 flex flex-col items-center self-end relative`,
  received: `bg-green-300  mt-2 w-[49%]  shadow-xl px-3 py-2 flex flex-col items-center self-start relative `,
};

const Message = ({ msgContent, senderName, sender }) => {
  return (
    <div className={sender === "sent" ? styles.sent : styles.received}>
      <div className="flex items-center justify-around align-middle gap-1">
        <p className=" self-start text-gray-600 font-light text-xs mt-1">
          {senderName}
        </p>
        <p className="text-base">{msgContent}</p>
      </div>
    </div>
  );
};

export default Message;
