import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { NotesProvider } from './context/NotesContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>
)
