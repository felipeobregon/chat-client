import React, { useState } from "react";

function TextInputWithAPIRequest({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && inputValue) {
      fetch('http://localhost:5000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          prompt: inputValue,
          /* other product data */
        })
      })
      .then(res => res.text())
      .then(t => onSearch(t))
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function DisplayAPIResponse({ text }) {
  return (
    <div>
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
    <div>
      <DisplayAPIResponse text={responseList} />
      <TextInputWithAPIRequest onSearch={handleSearch} />
    </div>
  );
}

export default ParentComponent;
