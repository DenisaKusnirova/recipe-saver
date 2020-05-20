import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";

function RecipeFormSelect({ label, choices, meta }) {
  return (
    <FormControl variant="outlined" size="small">
      <InputLabel shrink color="primary">
        {label}
      </InputLabel>
      <Select
        helperText={meta.error && meta.touched && meta.error}
        error={meta.error && meta.touched}
      >
        {choices &&
          choices.map((choice) => {
            return <MenuItem value={choice}>{choice}</MenuItem>;
          })}
      </Select>
    </FormControl>
  );
}

export default RecipeFormSelect;
