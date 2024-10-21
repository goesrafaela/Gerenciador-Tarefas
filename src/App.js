import React, { useState } from 'react';
import Todo from './Todo'; // Importando o componente Todo
import Sidebar from './components/Sidebar'; // Importando o novo componente Sidebar
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState(''); // Estado para a data de conclusão
  const [priority, setPriority] = useState('Baixa'); // Estado para a prioridade
  const [categories, setCategories] = useState(['Trabalho', 'Estudo']);
  const [selectedCategory, setSelectedCategory] = useState('Trabalho');

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { task, completed: false, category: selectedCategory, dueDate, priority }]);
      setTask(''); // Limpar o input da tarefa
      setDueDate(''); // Limpar o input da data
      setPriority('Baixa'); // Resetar a prioridade para o padrão
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    const completedTodo = newTodos.splice(index, 1)[0];
    completedTodo.completed = true;
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  const addCategory = () => {
    const newCategory = prompt('Digite o nome da nova categoria:');
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    } else if (newCategory) {
      alert('Categoria já existe!');
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Gerenciador de Tarefas</h1>
        <div className="categories">
          <span>Categorias:</span>
          {categories.map((category, index) => (
            <button
              key={index}
              className={category === selectedCategory ? 'selected' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          <button onClick={addCategory}>Adicionar Categoria</button>
        </div>
      </header>

      <div className="main-content">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Digite uma nova tarefa"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {todos
            .filter((todo) => todo.category === selectedCategory)
            .map((todo, index) => (
              <Todo
                key={index}
                task={todo.task}
                completed={todo.completed}
                dueDate={todo.dueDate} // Passa a data para o componente Todo
                priority={todo.priority} // Passa a prioridade para o componente Todo
                onToggleComplete={() => toggleComplete(index)}
                onRemove={() => removeTodo(index)}
              />
            ))}
        </ul>
      </div>

      {/* Chama o novo componente Sidebar */}
      <Sidebar 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        completedTodos={completedTodos} 
      />
    </div>
  );
}

export default App;
