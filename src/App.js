import './App.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'

function App() {
  return (
    <div className="">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  )
}

export default App
