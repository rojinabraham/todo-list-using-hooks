import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import ToDo from "./ToDo";

function ToDoList({ todos, removeTodo, toggleToDo, editToDo }) {
  if (todos.length) {
    // console.log(todos);
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <ToDo
                {...todo}
                removeTodo={removeTodo}
                key={todo.id}
                toggleToDo={toggleToDo}
                editToDo={editToDo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  } else return null;
}

export default ToDoList;
