import React, { useEffect, useState } from "react";
import getPets from "../lib/getPets";

export default function usePets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets().then((newPets) => setPets(newPets.data));
  }, [setPets]);

  return pets;
}
