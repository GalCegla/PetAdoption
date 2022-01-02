import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormHelperText,
  Switch,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useCallback } from "react";
import * as Yup from "yup";
import { STATUS_OPTIONS, TYPE_OPTIONS } from "./PetForm";
import SelectBox from "./SelectBox";
import TextField from "./TextField";

const SearchForm = ({ onSubmit, onResetClick }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

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
          <SwitchContainer>
            <Switch
              checked={checked}
              onChange={handleChange}
              lang="Advanced Search"
            />
            <FormHelperText>Advanced Search</FormHelperText>
          </SwitchContainer>
          <SelectBox
            name="type"
            label="Type"
            options={TYPE_OPTIONS}
            helperText="The pet's type"
          />
          {checked ? (
            <>
              <TextField name="name" helperText="The pet's name" label="Name" />
              <SelectBox
                name="status"
                label="Status"
                options={STATUS_OPTIONS}
                helperText="The pet's status"
              />
              <TextField
                name="height"
                helperText="The pet's height in cm"
                label="Height"
              />
              <TextField
                name="weight"
                helperText="The pet's weight in kg"
                label="Weight"
              />
            </>
          ) : null}
          <Button onClick={formik.submitForm} variant="contained">
            SEARCH
          </Button>
          <Button
            onClick={() => {
              formik.handleReset();
              onResetClick();
            }}
          >
            RESET
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  & > * {
    margin: 8px !important;
  }
`;

const SwitchContainer = styled(FormControl)``;

const INITIAL_VALUES = {
  status: "",
  height: "",
  weight: "",
  type: "",
  name: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  status: Yup.mixed().oneOf(["Adopted", "Fostered", "Available"]),
  height: Yup.string(),
  weight: Yup.string(),
  type: Yup.mixed().oneOf(["cat", "dog"]),
  name: Yup.string(),
});
