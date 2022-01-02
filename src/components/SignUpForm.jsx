import React, { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import { Button } from "@mui/material";
import TextField from "./TextField";
import * as Yup from "yup";
import styled from "@emotion/styled";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
};

const SignUpForm = ({ onSubmit }) => {
  const handleSubmit = useCallback((values) => {
    onSubmit(values);
  }, []);

  return (
    <>
      <Formik
        validationSchema={VALIDATION_SCHEMA}
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <StyledForm>
            <StyledTextField
              name="firstName"
              label="First Name"
              color="primary"
            />
            <StyledTextField name="lastName" label="Last Name" />
            <StyledTextField name="email" label="Email" />
            <StyledTextField name="phoneNumber" label="Phone Number" />
            <StyledTextField name="password" label="Password" type="password" />
            <StyledTextField
              name="passwordConfirmation"
              label="Password Again"
              type="password"
            />
            <Button onClick={formik.submitForm} variant="contained">
              SUBMIT
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;

const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email("Invalid Email").required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 8px !important;
  }
`;

const StyledTextField = styled(TextField)`
  & > * {
    color: ${({ theme }) => theme.palette.text.secondary} !important;
  }
`;
