import * as React from 'react'
import { useState, useMemo } from 'react'

export const Usememo = () => {

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const calculation = useMemo(() => expensiveCalculation(count), [count])

  const increment = () => {
    setCount((c) => c + 1)
  }

  const addTodo = () => {
    setTodos((t) => [...t, "Nueva misión del Imperio"])
  }

  return (
    <>
      <h2>Misiones del Imperio</h2>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}

      <button onClick={addTodo}>Añadir misión</button>

      <hr />

      <h3>Imperios creados: {count}</h3>

      <button onClick={increment}>Crear Imperio</button>

      <h3>Cálculo del Adeptus Mechanicus</h3>

      {calculation}
    </>
  )
}

const expensiveCalculation = (num) => {
  console.log("El Mechanicus está calculando...")

  for (let i = 0; i < 100000000; i++) {
    num += 1
  }

  return num
}