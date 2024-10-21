import React from 'react';
import './Sidebar.css'; // Estilo específico da Sidebar

function Sidebar({ categories, selectedCategory, onSelectCategory, completedTodos }) {
  return (
    <aside className="completed-tasks-sidebar">
      <h2>Categorias</h2>
      <div className="categories">
        
      </div>

      <h2>Tarefas Concluídas</h2>
      <ul>
        {completedTodos.map((todo, index) => (
          <li key={index} className="completed">
            {todo.task}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
