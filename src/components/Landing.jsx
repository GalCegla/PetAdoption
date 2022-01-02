import React, { useCallback, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import SignInDialog from "./SignInDialog";
import MainCard from "./MainCard";

const DOG_IMAGE_URL =
  "https://www.discoverdogs.org.uk/wp-content/uploads/2021/09/Pepper-BorderCollie-RachelOates-18.jpg";

const Landing = () => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <MainCard image={DOG_IMAGE_URL}>
      <SignInDialog open={open} onClose={handleClose} />
      <StyledText color="black" variant="body1">
        Welcome to Woof&Co.
      </StyledText>
      <StyledText variant="caption">
        Our service is all about new friends. Not only will you save a fluffy
        life, you'll also gain a new companion, who'll be always loyal to you
        (even if is a cat). Join our agency to start your journey, or take a
        look at our buddies here.
      </StyledText>
      <ActionsContainer>
        <StyledButton variant="outlined" onClick={handleClick}>
          SIGNUP
        </StyledButton>
        <Link href="/pets">Discover your new best friend...</Link>
      </ActionsContainer>
    </MainCard>
  );
};

export default Landing;

const StyledText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 8px;
`;

const ActionsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  margin-right: 16px;
`;
