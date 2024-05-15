import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './style/index.scss'
import firebaseConfig from '../firebaseConfig.js'
import {initializeApp} from "firebase/app"
initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
