import React, { useEffect, useState } from "react";
import getPet from "../lib/getPet";

export default function usePet(id) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    if (id) {
      getPet(id).then((pet) => setPet(pet));
    }
  }, [setPet, id]);

  return pet;
}
