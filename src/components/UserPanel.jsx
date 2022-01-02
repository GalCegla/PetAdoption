import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import updateUser from "../lib/updateUser";
import useCurrentUser from "../hooks/useCurrentUser";

const UserPanel = ({ user }) => {
  const [role, setRole] = useState("");

  const currentUser = useCurrentUser();

  const isCurrentUser = useMemo(
    () => currentUser._id == user._id,
    [currentUser, user]
  );

  const handleClick = useCallback(() => {
    const data = role === "user" ? { role: "admin" } : { role: "user" };
    updateUser(data, user._id)
      .then(() => setRole((prev) => (prev === "user" ? "admin" : "user")))
      .catch((error) => console.log(error));
  }, [user, role, setRole]);

  useEffect(() => {
    setRole(user.role);
  }, [setRole, user]);

  return (
    <Container>
      <StyledUser>
        <Typography>{user.firstName + " " + user.lastName}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{role}</Typography>
        <Button
          variant="contained"
          onClick={handleClick}
          disabled={isCurrentUser}
        >
          {role === "user" ? "PROMOTE" : "REVOKE"}
        </Button>
      </StyledUser>
      <Divider />
    </Container>
  );
};

export default UserPanel;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const StyledUser = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  & > * {
    margin-right: 4px;
  }
`;
