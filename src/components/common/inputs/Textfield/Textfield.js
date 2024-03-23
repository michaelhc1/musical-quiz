import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const Textfield = ({
  label,
  variant,
  onChange,
  type,
  style,
  value,
  helperText,
  error,
  className,
  inputProps,
}) => {
  const useStyles = makeStyles(style);

  const classes = useStyles();
  return (
    <div>
      <TextField
        classes={classes}
        className={className}
        error={error}
        label={label}
        variant={variant}
        onChange={onChange}
        inputProps={{
          style: inputProps,
        }}
        type={type}
        value={value}
        helperText={error ? helperText : ""}
        size="small"
      />
    </div>
  );
};

export default Textfield;
