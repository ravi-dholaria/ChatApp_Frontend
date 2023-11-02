import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation, useNavigate } from "react-router-dom";
import InfoBar from "../Infobar/Infobar";
import "./Chat.css";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "./../TextContainer/TextContainer";
let socket;
const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  // eslint-disable-next-line
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState();
  const [users, setUsers] = useState();
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://chat-app-rzzi.onrender.com";
  const navigate = useNavigate();
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        navigate("/");
      }
    });
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search, navigate]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);
  function sendMessage(event) {
    if (event) {
      event.preventDefault();
    }
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  }
  console.log(message, messages);
  return (
    <div class="outerContainer">
      <div class="container">
        <InfoBar />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
