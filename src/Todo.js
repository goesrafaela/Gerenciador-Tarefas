// src/components/Todo.js
import React from 'react';
import './Todo.css'; // Se você tiver estilos para o Todo

function Todo({ task, completed, dueDate, priority, onToggleComplete, onRemove }) {
  return (
    <li className={`todo ${completed ? 'completed' : ''}`}>
      <span onClick={onToggleComplete}>{task}</span>
      <span className="due-date">Data: {dueDate}</span>
      <span className="priority">Prioridade: {priority}</span>
      <button onClick={onRemove}>Remover</button>
    </li>
  );
}

export default Todo;
