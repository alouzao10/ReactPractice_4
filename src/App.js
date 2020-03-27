import React, { useState } from 'react';
import './App.css';

function ToDo({ todo, index }) {
  return <div className='todo'>{todo.text}</div>;
}

function ToDoForm({ addToDo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;

    addToDo(value);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Add ToDo Task...'
      />
    </form>
  );
}

function App() {
  const [todo, setToDo] = useState([
    {
      text: 'Learn about React...',
      isComplete: false
    },
    {
      text: 'Learn more about React...',
      isComplete: false
    },
    {
      text: 'Learn even more about React...',
      isComplete: false
    }
  ]);

  const addToDo = text => {
    const newToDo = [...todo, { text }];
    setToDo(newToDo);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todo.map((item, index) => (
          <ToDo key={index} index={index} todo={item} />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
