

import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App.jsx'
import './style/index.scss'
import firebaseConfig from './firebaseConfig.js'
import {initializeApp} from "firebase/app"
initializeApp(firebaseConfig)

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
