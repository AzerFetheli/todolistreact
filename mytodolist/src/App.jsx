
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <div className='background'>
      <div className='mywrapper'>
      <Header />
      <TodoList />
      </div>
     
    </div>
  );
};

export default App;
