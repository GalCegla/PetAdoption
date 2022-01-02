import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import useUserPets from "../hooks/useUserPets";
import PetSection from "./PetSection";

const Home = ({ user }) => {
  const pets = useUserPets();
  return (
    <Container>
      <Typography variant="h2">{user.firstName}'s space</Typography>
      {pets.adoptedPets?.length ? (
        <PetSection title="Adopted Pets" pets={pets.adoptedPets} />
      ) : null}
      {pets.fosteredPets?.length ? (
        <PetSection title="Fostered Pets" pets={pets.fosteredPets} />
      ) : null}
      {pets.savedPets?.length ? (
        <PetSection title="Saved Pets" pets={pets.savedPets} />
      ) : null}
    </Container>
  );
};

export default Home;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
