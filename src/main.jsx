import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReservaHotelesApp } from './ReservaHotelesApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ReservaHotelesApp></ReservaHotelesApp>
    </StrictMode>
  </BrowserRouter>
)
