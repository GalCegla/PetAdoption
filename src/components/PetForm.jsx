import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import TextField from "./TextField";
import * as Yup from "yup";
import SelectBox from "./SelectBox";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import ImageKitUpload from "./ImageKitUpload";

const PetForm = ({ onClick, defaultValues }) => {
  const handleSubmit = useCallback((values, { resetForm }) => {
    onClick(values);
    resetForm();
  }, []);
  return (
    <Formik
      initialValues={defaultValues || DEFAULT_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <TextField name="name" helperText="The pet's name" label="Name" />
          <SelectBox
            name="type"
            label="Type"
            options={TYPE_OPTIONS}
            helperText="The pet's type"
          />
          <SelectBox
            name="status"
            label="Status"
            options={STATUS_OPTIONS}
            helperText="The pet's status"
          />
          <ImageKitUpload name="picture" />
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
          <TextField name="color" helperText="The pet's color" label="Color" />
          <TextField
            name="bio"
            helperText="A bio of the pet"
            label="Bio"
            rows={3}
          />
          <SelectBox
            name="hypoallergenic"
            label="Hypoallergenic"
            options={HYPO_OPTIONS}
            helperText="Is the pet hypoallergenic?"
          />
          <TextField name="diet" helperText="The pet's diet" label="Diet" />
          <TextField name="breed" helperText="The pet's breed" label="Breed" />
          <Button onClick={formik.submitForm} variant="contained">
            ADD
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default PetForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  & > * {
    margin: 8px !important;
  }
`;

const DEFAULT_VALUES = {
  name: "",
  type: "",
  status: "",
  picture: "",
  height: "",
  weight: "",
  color: "",
  bio: "",
  hypoallergenic: "",
  diet: "",
  breed: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  type: Yup.string().required(),
  name: Yup.string().required(),
  status: Yup.mixed().oneOf(["Adopted", "Fostered", "Available"]).required(),
  picture: Yup.string().url().required(),
  height: Yup.number(),
  weight: Yup.number(),
  color: Yup.string(),
  bio: Yup.string(),
  hypoallergenic: Yup.mixed().oneOf(["Yes", "No"]).required(),
  diet: Yup.string(),
  breed: Yup.string(),
});

export const TYPE_OPTIONS = ["dog", "cat"];

export const STATUS_OPTIONS = ["Adopted", "Fostered", "Available"];

const HYPO_OPTIONS = ["Yes", "No"];
