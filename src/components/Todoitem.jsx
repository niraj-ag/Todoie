import React, { useState } from 'react';
import './style.css';

const Todoitem = ({ id, title, onEdit, onRemove }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [editText, setEditText] = useState(title);
  const [completed, setCompleted] = useState(false); // New state for completion status

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    onEdit(id, editText);
    setShowMenu(false);
  };

  const handleRemove = () => {
    onRemove(id);
    setShowMenu(false);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed); // Toggle completion status
  };

  return (
    <li className={`todoitem ${completed ? 'completed' : ''}`}>
      <span>
        <input type="checkbox" checked={completed} onChange={handleCheckboxChange}></input>
        <span className='todo-item-text' title={title}>
          {showMenu ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            title
          )}
        </span>
      </span>
      <span className="options" onClick={toggleMenu}>...</span>
      {showMenu && (
        <div className="menu">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </li>
  );
}

export default Todoitem;
