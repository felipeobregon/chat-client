import React, { useState, useEffect } from "react";
import { IncomingMessage, OutgoingMessage } from "./message";


function TextInputWithAPIRequest({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && inputValue) {

      let newMessage = <IncomingMessage prompt={inputValue}/>
      onSearch(newMessage)


      // Clear the text in the message box
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center p-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full border-8 border-gray-300 rounded-lg py-2 px-4"
      />
    </div>
  );
}

function DisplayAPIResponse({ text }) {
  return (
    <div className="flex-1 overflow-y-scroll">
      <ul>
      {text.map((x,index) => <li key={index}>{x}</li>)}

      </ul>
    </div>
  );
}

function ParentComponent() {
  const [responseList, setResponseList] = useState([])

  const handleSearch = (text) => {
    setResponseList([...responseList, text]);
  };

  return (
    <div className="flex flex-col h-screen mx-60">
      <h1>Your Chatbot</h1>
      <DisplayAPIResponse text={responseList} />
      <TextInputWithAPIRequest onSearch={handleSearch} />
    </div>
  );
}

export default ParentComponent;
