import React, { useState } from 'react';
import { X } from 'lucide-react';
import './styles.css'; // Importa el archivo CSS

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const tasksLeft = todos.length;

  return (
    <div className="todo-container">
      <div className="todo-card">
        {/* Header */}
        <div className="todo-header">
          <h1 className="todo-title">todos</h1>
        </div>

        <div className="todo-input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="todo-input"
            autoFocus
          />
        </div>

       
        <div className="todo-list">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-item">
              <span className="todo-text">
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
                aria-label="Delete todo"
              >
                <X className="delete-icon" />
              </button>
            </div>
          ))}
        </div>

    
        {todos.length > 0 && (
          <div className="todo-footer">
            <span className="todo-counter">
              {tasksLeft} {tasksLeft === 1 ? 'item' : 'items'} left
            </span>
          </div>
        )}

        
        {todos.length === 0 && (
          <div className="empty-state">
            No todos yet. Add one above!
          </div>
        )}
      </div>

      
      <div className="instructions">
        <p>Press Enter to add a todo</p>
        <p>Hover over items to delete them</p>
      </div>
    </div>
  );
}