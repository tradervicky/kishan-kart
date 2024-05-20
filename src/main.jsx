import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { store } from './app/store.js'
import { LanguageProvider } from './context/language/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
