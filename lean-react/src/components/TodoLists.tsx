import React from "react";
import type { Todo } from "./TodoApp";
import TodoItems from "./TodoItems";

interface TodoListsProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoLists({ todos, toggleTodo, deleteTodo }: TodoListsProps) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;
