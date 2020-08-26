import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
// import useTodoState from "./hooks/useTodoState";
function ToDoApp() {
  const initialToDos = [
    {
      id: 1,
      task: "Clean",
      completed: false,
    },
    {
      id: 2,
      task: "cook",
      completed: true,
    },
    {
      id: 3,
      task: "sleep",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialToDos);
  const addToDo = (newToDoText) => {
    console.log(newToDoText, "xnx");
    setTodos([...todos, { id: 4, task: newToDoText, completed: false }]);
    console.log(todos);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <ToDoForm addToDo={addToDo}></ToDoForm>
          <ToDoList removeTodo={removeTodo} todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default ToDoApp;