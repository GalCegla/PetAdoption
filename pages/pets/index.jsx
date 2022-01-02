import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import PetCard from "../../src/components/PetCard";
import SearchForm from "../../src/components/SearchForm";
import getPets from "../../src/lib/getPets";
import searchPets from "../../src/lib/searchPets";

const PetsPage = () => {
  const [pets, setPets] = useState([]);

  const handleSubmit = useCallback(
    (values) => {
      const data = valuesToQueryData(values);
      searchPets(data)
        .then((newPets) => {
          console.log(newPets);
          setPets(newPets);
        })
        .catch((error) => console.log(error));
    },
    [setPets]
  );

  const handleReset = useCallback(() => {
    getPets().then((allPets) => setPets(allPets.data));
  }, [setPets]);

  useEffect(() => {
    getPets().then((allPets) => setPets(allPets.data));
  }, [setPets]);

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit} onResetClick={handleReset} />
      <PetsContainer>
        {pets.map((pet) => (
          <StyledPetCard key={pet._id} pet={pet} />
        ))}
      </PetsContainer>
    </Container>
  );
};

export default PetsPage;

export function valuesToQueryData(values) {
  const queryData = {};
  for (const key in values) {
    const value = values[key];
    if (value) {
      if (key == "weight" || key == "height") {
        queryData[key] = Number(value);
      } else {
        queryData[key] = value;
      }
    }
  }
  return queryData;
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
