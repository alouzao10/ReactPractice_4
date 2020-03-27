import React, { useState } from 'react';
import './App.css';

function ToDo({ todo, index, setComplete, deleteToDo }) {
  return (
    <div
      style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}
      className='todo'
    >
      {todo.text}
      <div>
        <button onClick={() => setComplete(index)}>Toggle Task</button>
        <button onClick={() => deleteToDo(index)}>Remove Task</button>
      </div>
    </div>
  );
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
      isComplete: true
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

  const setComplete = index => {
    const newToDo = [...todo];

    if (newToDo[index].isComplete) {
      newToDo[index].isComplete = false;
    } else {
      newToDo[index].isComplete = true;
    }
    setToDo(newToDo);
  };

  const deleteToDo = index => {
    const newToDo = [...todo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todo.map((item, index) => (
          <ToDo
            key={index}
            index={index}
            todo={item}
            setComplete={setComplete}
            deleteToDo={deleteToDo}
          />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
