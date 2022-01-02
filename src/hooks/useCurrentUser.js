import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import getUser from "../lib/getUser";

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState({});
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.id != undefined) {
      getUser(auth.id).then((user) => setCurrentUser(user));
    } else {
      setCurrentUser({});
    }
  }, [setCurrentUser, auth]);

  return currentUser;
}
