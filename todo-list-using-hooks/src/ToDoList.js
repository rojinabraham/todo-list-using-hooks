import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import ToDo from "./ToDo";

function ToDoList({ todos, removeTodo, toggleToDo, editToDo }) {
  //   console.log(props, "xx");
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <ToDo
              removeTodo={removeTodo}
              task={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              toggleToDo={toggleToDo}
              editToDo={editToDo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;
