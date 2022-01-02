import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import PetCard from "./PetCard";

const PetSection = ({ title, pets }) => {
  return (
    <Container>
      <Typography variant="h4">{title}</Typography>
      <Divider />
      <PetsContainer>
        {pets.map((pet) => (
          <StyledPetCard key={pet._id} pet={pet} />
        ))}
      </PetsContainer>
    </Container>
  );
};

export default PetSection;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  & > * {
    margin-bottom: 8px;
  }
`;

const PetsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledPetCard = styled(PetCard)`
  margin: 8px;
  width: 50px;
`;
