import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {UIDProvider} from "./context/UserID.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIDProvider>
      <App />
    </UIDProvider>
    
  </React.StrictMode>,
)
