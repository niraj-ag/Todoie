import React from 'react';
import './style.css';

function Button({ addItem }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.item.value.trim();
    if (text !== '') {
      addItem(text);
      event.target.item.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" className='input-field' style={{ flex: 1, marginRight: '5px' }}/>
        <button className='todo-button' type="submit">Create New Item</button>
      </form>
    </div>
  );
}

export default Button;
