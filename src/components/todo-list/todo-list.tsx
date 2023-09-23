import React from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.scss";
import {useTodos} from "../../store";
import { ITodoList } from "../../interfaces";

interface TodoListProps {
  todos: ITodoList;
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  const toggleImportant = useTodos((state) => state.toggleImportant);
  const toggleDone = useTodos((state) => state.toggleDone);
  const deleteTodo = useTodos((state) => state.deleteTodo);

  const todoItems = todos.map((item) => {
      const {id, ...itemProps} = item;
    
      return (
          <li key = {id}>
              <TodoListItem {...itemProps} onDeleted={() => deleteTodo(id)} onToggleImportant={() => toggleImportant(id)} onToggleDone={() => toggleDone(id)}/>
          </li>
      );
  });

  return (
    <ul className="todo-list">
      {todoItems}
    </ul>
  );
};

export default TodoList;