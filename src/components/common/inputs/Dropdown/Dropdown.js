import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const Dropdown = ({
  options,
  label,
  variant,
  inputStyle,
  listboxStyle,
  onChange,
  value,
  className,
}) => {
  const useStyles = makeStyles(inputStyle);

  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        options={options}
        classes={classes}
        className={className}
        getOptionLabel={(option) => option.name}
        onChange={onChange}
        size="small"
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            // color="secondary"
            label={label}
            variant={variant}
          />
        )}
      />
    </div>
  );
};

export default Dropdown;
