import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {store} from './store/index.js'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

const clientId = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)
