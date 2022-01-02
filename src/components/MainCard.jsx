import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

const MainCard = ({ image, children }) => {
  return (
    <Container>
      <StyledCard>
        <StyledCardActionArea>
          <StyledMedia component="img" image={image} />
        </StyledCardActionArea>
        <StyledCardContent>{children}</StyledCardContent>
      </StyledCard>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  height: 100vh;
`;

const StyledCard = styled(Card)`
  width: 40%;
  margin: 8px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1100px) {
    width: 80%;
    flex-direction: column;
  }
`;

const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
`;

const StyledMedia = styled(CardMedia)`
  width: 100%;
  @media (max-width: 1100px) {
    width: 40%;
    align-self: center;
  }
  @media (max-width: 520px) {
    min-width: 40%;
    width: 100%;
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  height: 100%;
  justify-content: center;
`;

export default MainCard;
