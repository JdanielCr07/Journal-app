import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles.css'
import { Journalapp } from './Journal-app.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Journalapp />
    </BrowserRouter>
  </React.StrictMode>
)
