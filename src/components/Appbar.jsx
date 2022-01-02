import {
  AppBar,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SignInDialog from "./SignInDialog";
import { useCallback, useContext, useState } from "react";
import AuthContext from "../context/authContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import useCurrentUser from "../hooks/useCurrentUser";

const Appbar = () => {
  const [open, setOpen] = useState(false);

  const { setAuth } = useContext(AuthContext);

  const currentUser = useCurrentUser();

  const handleClick = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    setAuth({});
  }, []);

  return (
    <StyledAppBar position="static">
      <SignInDialog open={open} onClose={handleClose} />
      <StyledToolbar>
        <ActionSection>
          <Typography color={(theme) => theme.palette.secondary}>
            Hello, {currentUser.firstName ? currentUser.firstName : "Guest!"}
          </Typography>
          <Link href="/">
            <StyledLinkText>Home</StyledLinkText>
          </Link>
          <Link href="/pets">
            <StyledLinkText>Pets</StyledLinkText>
          </Link>
          {currentUser.role === "admin" ? (
            <Link href="/admin-panel">
              <StyledLinkText>Admin</StyledLinkText>
            </Link>
          ) : null}
        </ActionSection>
        {currentUser._id ? (
          <ActionSection>
            <StyledButton variant="outlined" onClick={handleLogout}>
              LOGOUT
            </StyledButton>
            <Link href={`/users/${currentUser._id}`}>
              <IconButton color="secondary">
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Link>
          </ActionSection>
        ) : (
          <StyledButton variant="outlined" onClick={handleClick}>
            CONNECT
          </StyledButton>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Appbar;

const StyledAppBar = styled(AppBar)`
  background-color: #494949;
`;

const StyledTextField = styled(TextField)`
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.secondary.main};
  }
  .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.secondary.main};
  border-color: ${({ theme }) => theme.palette.secondary.main};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ActionSection = styled(Box)`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 24px !important;
  }
`;

const StyledLinkText = styled(Typography)`
  cursor: pointer;
  text-decoration: underline;
`;
