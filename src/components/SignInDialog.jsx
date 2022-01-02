import { Dialog, DialogContent, Tab, Tabs } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import AuthContext from "../context/authContext";
import login from "../lib/login";
import signup from "../lib/signup";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const SignInDialog = ({ open, onClose }) => {
  const [value, setValue] = useState(0);

  const { setAuth } = useContext(AuthContext);
  const handleChange = useCallback(
    (event, newValue) => {
      setValue(newValue);
    },
    [setValue]
  );

  const handleSignupSubmit = useCallback(async (values) => {
    const authData = await signup(values);
    setAuth(authData);
    onClose();
  }, []);
  const handleLoginSubmit = useCallback(async (values) => {
    const authData = await login(values);
    setAuth(authData);
    onClose();
  }, []);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="SIGNUP" />
          <Tab label="LOGIN" />
        </Tabs>
        {value == 0 ? (
          <SignUpForm onSubmit={handleSignupSubmit} />
        ) : (
          <LoginForm onSubmit={handleLoginSubmit} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
