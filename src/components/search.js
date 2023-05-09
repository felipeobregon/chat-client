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
      <p>{text}</p>
    </div>
  );
}

function ParentComponent() {
  const [apiResponse, setAPIResponse] = useState("Default value");

  const handleSearch = (text) => {
    setAPIResponse(text);
  };

  return (
    <div>
      <TextInputWithAPIRequest onSearch={handleSearch} />
      <DisplayAPIResponse text={apiResponse} />
    </div>
  );
}

export default ParentComponent;
