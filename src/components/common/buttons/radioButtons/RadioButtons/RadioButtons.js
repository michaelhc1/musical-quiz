import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

export default function RadioButtonsGroup({
  label,
  values,
  value,
  onChange,
  color,
}) {
  const ModifiedRadio = withStyles({
    root: {
      color: "black",
      "&$checked": {
        color: color,
      },
    },
    checked: {},
  })((props) => <Radio {...props} />);

  return (
    <FormControl component="fieldset">
      <FormLabel
        component="legend"
        style={{ color: "black", fontSize: "11.5px" }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={onChange}
      >
        {values.map((_) => (
          <FormControlLabel
            value={_}
            control={<ModifiedRadio />}
            label={_.charAt(0).toUpperCase() + _.slice(1)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
