import React, { useState } from "react";

function TextInputWithAPIRequest({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && inputValue) {
      try {
        const response = await fetch(`https://api.example.com/search?q=${inputValue}`);
        const data = await response.json();
        onSearch(data.text);
      } catch (error) {
        console.error(error);
      }
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
  const [apiResponse, setAPIResponse] = useState("");

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
