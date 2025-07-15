import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/selection.css"
import "./index.css"
import UserSelection from "./components/selection.jsx"
import PollQuestion from "./components/questionBox.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PollQuestion />
    <UserSelection />
    <UserSelection />
    <UserSelection />
    <UserSelection />
  </StrictMode>,
)