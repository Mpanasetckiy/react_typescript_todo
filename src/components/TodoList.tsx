import { link } from "fs";
import React from "react";

type TodoListProps = {
  items: { id: string; text: string }[];
  onDelTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={() => {
              props.onDelTodo(todo.id);
            }}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
