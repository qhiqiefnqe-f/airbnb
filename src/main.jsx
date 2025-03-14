import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@assets/css/index.less'
import App from './App.jsx'
import 'normalize.css'
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>,
)
