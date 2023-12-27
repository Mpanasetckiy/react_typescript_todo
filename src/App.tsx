import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

import { Todo } from "./todo-model";

const App: React.FC = () => {
  // const todos = [{ id: "t1", text: "Finish the course" }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const randomId = Math.random().toString();
    setTodos((prevTodos) => [...prevTodos, { id: randomId, text: text }]);
  };

  const todoDelHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDelTodo={todoDelHandler} />
    </div>
  );
};

export default App;
