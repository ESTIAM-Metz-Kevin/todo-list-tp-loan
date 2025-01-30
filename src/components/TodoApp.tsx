import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { TodoItem } from "./TodoItem";

type TodoItem = {
  id: number;
  description: string;
  done: boolean;
};

export function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (description: string) => {
    setTodos([...todos, { id: Date.now(), description, done: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const sortedTodos = [...todos].sort(
    (a, b) => Number(a.done) - Number(b.done)
  );

  return (
    <div className="w-full max-w-md">
      <SearchBar onAdd={addTodo} />
      <div className="mt-5">
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
