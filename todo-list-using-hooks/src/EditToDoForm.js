import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
function EditToDoForm({ id, editToDo, task, toggle }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editToDo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        fullWidth
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditToDoForm;
