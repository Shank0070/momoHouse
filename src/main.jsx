import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './context/CartProvider.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>

    <Auth0Provider
    domain="dev-jpiibg1x2csysqdc.us.auth0.com"
    clientId="H4NP2IkW8tpi1Zuikno4YHWyp4tirQZ2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
      </CartProvider>

  </BrowserRouter>
 
)
