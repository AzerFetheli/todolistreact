import React, { useState } from 'react';
import AddTodo from './addTodo';

const Form = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <AddTodo
        todoText={todoText}
        setTodoText={setTodoText}
      />
      <button type="submit" className='button'>Add</button>
    </form>
  );
};

export default Form;
