import React, { useState } from 'react';
import Todoitem from './Todoitem';
import './style.css';

const TodoList = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(), // Generate a unique id
      text: text
    };
    setItems([...items, newItem]);
  };

  const editItem = (id, newText) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Todoitem
            key={item.id}
            id={item.id}
            title={item.text}
            onEdit={editItem}
            onRemove={removeItem}
          />
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const text = event.target.item.value.trim();
          if (text !== '') {
            addItem(text);
            event.target.item.value = '';
          }
        }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <input
          type="text"
          name="item"
          style={{ flex: 1, marginRight: '5px' }}
        />
        <button className="todo-button" type="submit">
          Create New Item
        </button>
      </form>
    </div>
  );
}

export default TodoList;
