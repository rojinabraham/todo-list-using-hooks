import React from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
function ToDoForm({ addToDo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToDo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          margin="normal"
          label="Add To Do "
          onChange={handleChange}
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default ToDoForm;
