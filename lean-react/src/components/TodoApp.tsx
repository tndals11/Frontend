import React, { useEffect, useRef, useState } from "react";
import TodoLists from "./TodoLists";
import "./todostyle.css";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const getTodosLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  // storedTodos가 존재한다면 json파싱
  // 존재하지 않는다면 빈 배열을 반환
  return storedTodos ? JSON.parse(storedTodos) : [];
};

function TodoApp() {
  //# 훅스
  const [todos, setTodos] = useState<Todo[]>(getTodosLocalStorage);

  const [inputValue, setInputValue] = useState<string>("");

  const nextId = useRef<number>(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
  );

  useEffect(() => {
    // todos가 바뀔 때 마다 로컬스토리지에 저장
    localStorage.setItem("todos", JSON.stringify(todos));

    // todos가 변화할 때 마다 렌더링
  }, [todos]);

  //# 이벤트 핸들러

  //& 할 일 추가
  const onAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("공백을 입력해주세요.");
      return;
    }

    const newTodo: Todo = {
      id: nextId.current,
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);

    nextId.current += 1;
    setInputValue("");
  };

  //& 할 일 토글 (완료여부)
  // 각 텍스트의 ID가 필요
  const onToggleTodoCompleted = (id: number) => {
    const toggledTodo = todos.find((todo) => todo.id === id);

    if (toggledTodo) {
      const action = toggledTodo.completed
        ? "미완료하셨습니다."
        : "완료하셨습니다.";

      alert(`'${toggledTodo.text} 할 일을 ${action}'`);
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //& 할 일 삭제
  // 각 텍스트의 ID가 필요
  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //& 할 일 전체 삭제
  const onAlldelete = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <div className="todo-container">
        <h5>Todo List</h5>
        <input
        className="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? onAddTodo() : null)}
        />
        <button
        className="todo-btn"
        onClick={onAddTodo}>저장하기</button>
        <TodoLists
          todos={todos}
          toggleTodo={onToggleTodoCompleted}
          deleteTodo={onDeleteTodo}
        />
        <button onClick={onAlldelete}>전부 삭제</button>
      </div>
    </div>
  );
}

export default TodoApp;
