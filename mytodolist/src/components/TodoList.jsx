import React, { useState } from 'react';
import Form from './form';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <Form addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='list'>
            {todo.text}
            <button onClick={() => removeTodo(index)} className='btn'>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
