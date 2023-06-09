import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todos.css';
// import smile from "../Diarycompo/assets/smile.gif";
import smile from "../Todo/smile.gif";

function Todo() {
  const [todos, setTodos] = useState([]);

  //function to add items once user click add button
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  //function to update items once user click update button
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //function to remove items once user click remove icons
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  //function to show items as completed once user click on completed task
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
    <div className="imagesmile">  <img src={smile} /> 
    <h1 className="Diaryname">Diary</h1></div>
    <div className="todo-Container">
    
      <h1 className="header">Add your Plan </h1>

      {/*once we display header to the webpage 
      we will pass the function as props to TodoForm and TodoList to display the data to user*/}

      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
    </div>
  );
}

export default Todo;
