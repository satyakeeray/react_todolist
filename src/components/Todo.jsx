import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import TodoItem from './TodoItem';
const Todo = () => {
  const todoTextItem = useRef(null);
  const [todoItem, setTodoItem] = useState([]);
  const addTodoItem = () => {
    setTodoItem([...todoItem,todoTextItem.current.value]);
    todoTextItem.current.value = '';
  }
  return (
    <div>
      <div className="todo-list">
        <div className="text-button-wrap">
          <input type="text" className="text" placeholder="Enter your task" ref={todoTextItem} />
          <button onClick={addTodoItem}>Add Task</button>
        </div>
        <div className="todo-items">
          {
            todoItem.map((item,index) => {
              return (
                <TodoItem item_name={item} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Todo;