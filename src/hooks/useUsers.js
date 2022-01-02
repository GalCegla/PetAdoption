import React, { useEffect, useState } from "react";
import getUsers from "../lib/getUsers";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, [setUsers]);

  return users;
}
