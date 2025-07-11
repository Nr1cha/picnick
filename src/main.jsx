import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/selection.css"
import UserSelection from "./components/selection.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserSelection />
  </StrictMode>,
)