import styled from "@emotion/styled";
import { ButtonBase, Typography } from "@mui/material";
import React from "react";

const ActionButton = ({ label, Icon, disabled, onClick }) => {
  return (
    <StyledButtonBase disabled={disabled} onClick={onClick}>
      <Icon />
      <Typography variant="caption">{label}</Typography>
    </StyledButtonBase>
  );
};

export default ActionButton;

const StyledButtonBase = styled(ButtonBase)`
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 10%;
`;
