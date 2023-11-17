import React from 'react';

const AddTodo = ({ todoText, setTodoText }) => {
    const handleChange = (e) => {
        setTodoText(e.target.value);
    };

    return (
        <input
            type="text"
            value={todoText}
            onChange={handleChange}
            placeholder="Add new todo" className='input'
        />
    );
};

export default AddTodo;
