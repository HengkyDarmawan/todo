import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const tambahTodo = (text) => {
    let id = 1;
    if(todos.length > 0){
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos);
  }

  const hapusTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="todolist-app">
      <h1>Todo Makan Hari ini</h1>
      <TodoForm tambahTodo={tambahTodo} />
      <hr className="seperator"/>
      {todos.map((todo) => {
        return(
          <TodoItem 
            hapusTodo={hapusTodo}
            completeTodo={completeTodo} 
            todo={todo} 
            key={todo.id} 
          />
        )
      })}
    </div>
  );
}

export default App;
