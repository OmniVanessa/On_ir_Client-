import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio"
import Admin from "./pages/Admin"
import Client from "./pages/client"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </div>
    </>
  )
}

export default App
