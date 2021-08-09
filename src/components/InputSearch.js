import React, { useState } from "react";

const InputSearch = ({ onSearch }) => {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (e) => {
    setSearchKey(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchKey}
        placeholder="Enter Search Key..."
        autoFocus
        onChange={handleChange}
      />
    </div>
  );
};

export default InputSearch;
