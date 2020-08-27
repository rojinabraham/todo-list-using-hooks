import React from "react";
import useToggle from "./hooks/useToggle";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditToDoForm from "./EditToDoForm";

function ToDo({ editToDo, task, completed, removeTodo, id, toggleToDo }) {
  const [isEditing, toggle] = useToggle(false);

  const runToggle = () => {
    toggleToDo(id);
  };
  const runRemove = () => {
    removeTodo(id);
  };
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditToDoForm
          task={task}
          id={id}
          editToDo={editToDo}
          toggle={toggle}
        ></EditToDoForm>
      ) : (
        <>
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
            <IconButton onClick={toggle} aria-label="Edit">
              <EditIcon></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default ToDo;
