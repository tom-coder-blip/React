//This React program is implementing a To-Do List application using the useReducer hook and 
// the Context API for global state management

import React, { useReducer } from 'react'
import ToDoList from './ToDoList'

//Initial state for the app: an object with a todos array (initially empty).
const todosInitialState = { 
  todos:[]
}

export const TodosContext = React.createContext() //Creates a Context object. This allows any component within the provider to access or update the global to-dos state via useContext.

function App() {
  const [state, dispatch] = useReducer(todosReducer,todosInitialState)
  
  return (
    <TodosContext.Provider value={{state,dispatch}}>
      <ToDoList />  
    </TodosContext.Provider>
  )
}

//A pure function that takes the current state and an action, and returns a new state based on the action type.
function todosReducer(state, action){ 
  switch(action.type){ 
    case 'get':
      return {...state, todos: action.payload}
    case 'add':
      // add new todo onto array
      action.payload.text = action.payload.text
      const addedToDos = [...state.todos, action.payload]
      // spread our state and assign todos
      return {...state, todos:addedToDos}
    case 'delete':
      const filteredTodoState = state.todos.filter( todo => todo.id !== action.payload.id)
      return {...state, todos: filteredTodoState}
    case 'edit':   
      const updatedToDo = {...action.payload} 
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0,updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return {...state, todos: updatedToDos} 
    case 'refresh':
      return { todos: action.payload}

    default:
      return todosInitialState
  }
}

export default App
