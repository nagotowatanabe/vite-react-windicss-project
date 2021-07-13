import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center my-8 flex justify-center">
      <div className="px-8 py-6 rounded-2xl bg-gray-600 text-gray-100">
        <p>
          <a href="">
            Vite + React + WindiCSS
          </a>
        </p>
        <p>
          <em className="text-sm opacity-75">Sooooo Fast!!</em>
        </p>
      </div>
    </div>
  )
}

export default App
