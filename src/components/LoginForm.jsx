import React, { useCallback } from "react";
import { Form, Formik } from "formik";
import { Button } from "@mui/material";
import TextField from "./TextField";
import * as Yup from "yup";
import styled from "@emotion/styled";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = ({ onSubmit }) => {
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
            <StyledTextField name="email" label="Email" />
            <StyledTextField name="password" label="Password" type="password" />
            <Button onClick={formik.submitForm} variant="contained">
              SUBMIT
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(),
  password: Yup.string().required(),
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
