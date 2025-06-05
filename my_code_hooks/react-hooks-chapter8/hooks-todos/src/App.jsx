import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ToDoList from './ToDoList'

//This is the initial state for the todo list – an array of todo items.
const todosInitialState = {
  todos: [{ id: 1, text: "finishing writing hooks chapter" },
  { id: 2, text: "play with kids" },
  { id: 3, text: "read bible" }
  ]
}

//Creates a context object that allows any component to access shared state (in this case, the todos and the dispatch function).
export const TodosContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState)

  // provides this state and dispatch to all child components – here, it wraps the ToDoList component.
  //This avoids prop drilling by making state accessible without passing it down multiple levels manually.
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  )
}

//The reducer function handles state updates based on the action type:s
function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      const newToDo = { id: uuidv4(), text: action.payload }
      // add new todo onto array
      const addedToDos = [...state.todos, newToDo]
      // spread our state and assign todos
      return { ...state, todos: addedToDos }
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }
    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }

    default:
      return todosInitialState
  }
}

export default App
