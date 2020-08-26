import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
function ToDo({ task, completed, removeTodo, id, toggleToDo }) {
  const runToggle = () => {
    toggleToDo(id);
    console.log(id);
  };
  const runRemove = () => {
    removeTodo(id);
    console.log(id);
  };
  return (
    <ListItem>
      <Checkbox onClick={runToggle} tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={runRemove} aria-label="Delete">
          <DeleteIcon></DeleteIcon>
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon></EditIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ToDo;
