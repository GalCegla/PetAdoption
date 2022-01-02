import React, { useCallback, useContext, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SignInDialog from "./SignInDialog";
import AuthContext from "../context/authContext";

const PetCard = ({ pet }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { auth } = useContext(AuthContext);

  const handleClick = useCallback(
    () => (auth.id ? router.push(`/pets/${pet._id}`) : setOpen(true)),
    [router, auth]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
    router.reload;
  }, [setOpen, router]);

  return (
    <StyledCard>
      <SignInDialog open={open} onClose={handleClose} />
      <StyledActionArea onClick={handleClick}>
        <StyledCardMedia component="img" image={pet.picture} />
        <StyledCardContent>
          <Typography variant="h5">{pet.name}</Typography>
          <Typography variant="body1">{pet.bio}</Typography>
          <Typography variant="caption">
            {pet.color} {pet.type}.
          </Typography>
          <Typography variant="body2">{pet.status}</Typography>
        </StyledCardContent>
      </StyledActionArea>
    </StyledCard>
  );
};

export default PetCard;

const StyledCard = styled(Card)`
  margin: 8px;
  width: 300px;
  padding: 8px;
`;

const StyledActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const StyledCardMedia = styled(CardMedia)`
  flex-grow: 1;
`;
