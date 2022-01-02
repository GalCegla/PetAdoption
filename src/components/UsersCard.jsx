import styled from "@emotion/styled";
import { Card } from "@mui/material";
import React from "react";
import UserPanel from "./UserPanel";

const UsersCard = ({ users }) => {
  return (
    <Container>
      {users.map((user) => (
        <UserPanel user={user} key={user.id} />
      ))}
    </Container>
  );
};

export default UsersCard;

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 16px;
`;
