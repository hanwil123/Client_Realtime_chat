import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Card from "./Card";
import Headerchat from "./Headerchat";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // Implement logic to send a message
  const sendMessage = () => {
    const newMessage = {
      content: inputMessage,
      type: "selv", // Assuming the sender's message is of type 'selv'
      timestamp: Date.now(),
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  useEffect(() => {
    // Implement logic to receive messages
    // You may need to set up a WebSocket connection or use another mechanism
    // to receive messages from the server.
    // For now, let's simulate receiving a message after 2 seconds.
    const timeoutId = setTimeout(() => {
      const receivedMessage = {
        content: "Hello from the receiver!",
        type: "recv", // Assuming the receiver's message is of type 'recv'
        timestamp: Date.now(),
      };
      setMessages([...messages, receivedMessage]);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [messages]);

  return (
    <>
      <div className=" inline-flex flex-col h-full py-5 w-[460px] px-5">
        <div className=" mb-5">
          <Headerchat />
        </div>
        <div>
          {messages.map((msg, index) => (
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="chat-header">
                {msg.type === "selv" ? "You" : "Receiver"}
                <time className="text-xs opacity-50">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </time>
              </div>
              <div className="chat-bubble">{msg.content}</div>
              <div className="chat-footer opacity-50">
                {msg.type === "selv"
                  ? "Delivered"
                  : `Seen at ${new Date(msg.timestamp).toLocaleTimeString()}`}
              </div>
            </div>
          ))}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          <div className=" relative mt-20">
            <div className="join">
              <div className="">
                <div>
                  <input
                    className="input input-bordered join-item w-80"
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="indicator">
                <button className="btn join-item" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
