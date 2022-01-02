import React, { useCallback } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import TextField from "./TextField";

const ProfileForm = ({ onSubmit }) => {
  const handleSubmit = useCallback(
    (values) => {
      onSubmit(values);
    },
    [onSubmit]
  );
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {(formik) => (
        <StyledForm>
          <TextField
            name="firstName"
            label="First Name"
            helperText="Change your first name"
          />
          <TextField
            name="lastName"
            label="Last Name"
            helperText="Change your last name"
          />
          <TextField
            name="email"
            label="Email"
            helperText="Change your email"
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            helperText="Change your phone number"
          />
          <TextField
            name="password"
            label="Change Password"
            helperText="Change your password"
          />
          <Button variant="contained" onClick={formik.handleSubmit}>
            SAVE
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ProfileForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 16px;
  & > * {
    margin: 8px;
  }
`;

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email(),
  phoneNumber: Yup.string(),
  password: Yup.string(),
});
