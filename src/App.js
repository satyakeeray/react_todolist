import React from 'react';
import './style.css';
import Todo from './components/Todo';
import TodoItem from './components/TodoItem';
export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <Todo />
      <TodoItem />
    </div>
  );
}
