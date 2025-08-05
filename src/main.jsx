import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/selection.css"
import "./index.css"
import PollQuestion from "./components/questionBox.jsx"
import ShowCount from "./components/showCount.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PollQuestion />
    <ShowCount />
  </StrictMode>,
)