import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserNav, SiteNav } from './nav'}
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNav />
    <SiteNav />
  </React.StrictMode>,
)
