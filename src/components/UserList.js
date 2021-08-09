import React, { useState, useEffect } from "react";
import List from "./List";
import UserCard from "./UserCard";
import { isSearch } from "../utils";

const UserList = ({ searchKey }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((e) => alert("API error"));
  }, []);

  const filtered = isSearch(users, searchKey) || [];

  return (
    <div className="user-list">
      <List data={filtered} renderItem={(item) => <UserCard data={item} />} />
    </div>
  );
};

export default UserList;
