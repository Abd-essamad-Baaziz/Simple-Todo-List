import { useState } from 'react'

function TodoList() {
  const [input, setInput] = useState(""); // useState hook to store the value of the new todo input
  const [todos, setTodos] = useState([]); // useState hook to store the list of todos

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from refreshing the page
    setTodos([...todos, input]) // add the new todo to the list of todos
    setInput('') // reset the value of the new todo input
  }

  const handleChange = (e) => {
    setInput(e.target.value); // update the value of the new todo input
  }

  return (
    <div className="TodoListe">
        <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList