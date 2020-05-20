import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

function RecipeFormTextField({ input, label, meta, rows, type, time }) {
  const classes = useStyles();

  return (
    <div>
      <InputLabel shrink color="primary">
        {label}
      </InputLabel>
      <TextField
        variant="outlined"
        helperText={meta.error && meta.touched && meta.error}
        error={meta.error && meta.touched}
        autoComplete="none"
        size="small"
        multiline={rows && true}
        rows={rows}
        type={type}
        {...input}
      />
    </div>
  );
}

export default RecipeFormTextField;
