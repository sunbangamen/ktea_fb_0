import React, { useEffect, useState } from "react";
import { authService, database } from "../services/firebase";
import { sendChat, getChats } from "../helpers/database";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);

  const getChatList = () => {
    const chatList = getChats();
    setChats(chatList);
  };
  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log(msg);
    try {
      await sendChat({
        message: msg,
        timestamp: Date.now(),
        uid: authService.currentUser.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const scrolltoBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };
  useEffect(() => {
    try {
      database.ref("chats").on("child_added", getChatList);
      database.ref("chats").on("child_changed", getChatList);
      scrolltoBottom();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="chat-container">
      <div className="chat-top">헤더</div>
      <div className="chat-middle">
        <li className="chat-bubble send">
          <p>
            하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~ 하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
            하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~하이룽~
          </p>
          <span>13:30PM</span>
        </li>
        <li className="chat-bubble receive">
          <p>방가방가!!</p>
          <span>13:31PM</span>
        </li>
      </div>
      <div className="chat-bottom">
        <form onSubmit={handleSumbit}>
          <input placeholder="내용을 입력하세요." value={msg} onChange={handleOnChange} />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
