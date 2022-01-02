import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import getUserPets from "../lib/getUserPets";

export default function useUserPets() {
  const [pets, setPets] = useState({});
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.id) {
      getUserPets(auth.id).then((data) => {
        setPets(data);
      });
    }
  }, [auth]);

  return pets;
}
