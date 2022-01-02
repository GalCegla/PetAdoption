import React from "react";
import { TextField as MuiTextField } from "@mui/material";
import { useField } from "formik";

/**
 * Material UI TextField integrated with Formik
 */
const TextField = ({
  maxLength,
  name,
  helperText,
  rows,
  startAdornment,
  label,
  ...rest
}) => {
  const [field, meta] = useField({
    name,
  });

  return (
    <MuiTextField
      {...rest}
      {...field}
      rows={rows}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : helperText}
      inputProps={{ maxLength }}
      placeholder={label}
    />
  );
};

export default TextField;
