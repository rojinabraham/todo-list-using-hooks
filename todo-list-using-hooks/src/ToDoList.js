import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import ToDo from "./ToDo";

function ToDoList({ todos, removeTodo }) {
  //   console.log(props, "xx");
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ToDo
              removeTodo={removeTodo}
              task={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ToDoList;
