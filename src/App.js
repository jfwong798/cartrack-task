import React, { useState } from "react";
import { InputSearch, UserList } from "./components";
import "./App.scss";

const App = () => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="card">
      <InputSearch onSearch={setSearchKey} />
      <UserList searchKey={searchKey} />
    </div>
  );
};

export default App;
