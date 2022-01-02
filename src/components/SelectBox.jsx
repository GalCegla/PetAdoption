import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";
import React, { useCallback } from "react";

const SelectBox = ({ options, name, label, helperText }) => {
  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const [field, meta, helpers] = useField({ name });

  const { value, setValue } = helpers;

  return (
    <FormControl>
      <InputLabel id="label">{label}</InputLabel>
      <Select
        {...field}
        value={field.value || value}
        onChange={handleChange}
        labelId="label"
        label={label}
        placeholder={label}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectBox;
