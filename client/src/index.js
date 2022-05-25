import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PersonasProvider } from './context/personas-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <PersonasProvider>
         <App />
      </PersonasProvider>
   </React.StrictMode>
)
