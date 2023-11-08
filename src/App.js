import React from "react";
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import './index.css';
import {useSelector} from 'react-redux';

export default function App() {

  const todos = useSelector( store => store.todo.items);
  // console.log(todos[0]);


  return (
    <div className='border h-screen bg-gray-400'>
      <h2 className='text-center my-8 text-lg text-semibold '>Welcome, TODO APP</h2>
      <AddTodo />
      <>
        <div className='mt-3 text-center'>My Todos</div>
        <ul className="list-none flex flex-col justify-center items-center">
            {todos?.map((todo) => (
               <Todos  key={todo.id} todo={todo} />
            ))}
          </ul>
      </>
    </div>
  );
}
