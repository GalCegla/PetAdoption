import React from "react";
import { useRouter } from "next/router";
import Pet from "../../../src/components/Pet";
import usePet from "../../../src/hooks/usePet";
import useCurrentUser from "../../../src/hooks/useCurrentUser";
import EditPet from "../../../src/components/EditPet";
import { CircularProgress } from "@mui/material";

const PetPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const pet = usePet(id);
  const currentUser = useCurrentUser();

  if (!currentUser._id) {
    return null;
  }

  if (!pet._id) {
    return <CircularProgress />;
  }

  return currentUser.role === "admin" ? (
    <EditPet pet={pet} />
  ) : (
    <Pet pet={pet} />
  );
};

export default PetPage;
