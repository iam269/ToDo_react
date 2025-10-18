import React, { useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, isComplete: false }])
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    ))
  }

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/*----- title -----*/}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt=""/>
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
      {/*----- input box -----*/}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type='text'
          placeholder='Add your task'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
          onClick={addTodo}
        >
          ADD +
        </button>
      </div>
      {/*----- todo list -----*/}
      <div>
        {todos.map(todo => (
          <TodoItems
            key={todo.id}
            text={todo.text}
            id={todo.id}
            isComplete={todo.isComplete}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  )
}

export default Todo
