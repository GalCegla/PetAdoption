import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";
import React, { useCallback } from "react";
import PetForm from "../src/components/PetForm";
import UsersCard from "../src/components/UsersCard";
import addPet from "../src/lib/addPet";
import useUsers from "../src/hooks/useUsers";
import useCurrentUser from "../src/hooks/useCurrentUser";
import Link from "next/link";

const AdminPanel = () => {
  const users = useUsers();

  const currentUser = useCurrentUser();

  const handleClick = useCallback((values) => {
    addPet(values);
  }, []);

  if (!currentUser._id || currentUser.role !== "admin") {
    return (
      <Link href="/">
        You don't have permission to be here. Click to go back.
      </Link>
    );
  }

  return (
    <Container>
      <StyledCard>
        <PetForm onClick={handleClick} />
      </StyledCard>
      <UsersCard users={users} />
    </Container>
  );
};

export default AdminPanel;

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledCard = styled(Card)`
  margin: 16px;
  width: 50%;
`;
