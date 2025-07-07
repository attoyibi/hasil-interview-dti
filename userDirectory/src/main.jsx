import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/UserCard.css'
import UserCard from './components/UserCard.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
  </StrictMode>,
)
