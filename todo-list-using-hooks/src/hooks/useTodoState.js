import uuid from "uuid/dist/v4";
import useLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addToDo: (newToDoText) => {
      setTodos([...todos, { id: uuid(), task: newToDoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleToDo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editToDo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
