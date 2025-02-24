import React from 'react'
import ReactDOM from 'react-dom/client'
import { Account } from './layout/Account'
import { RouterProvider } from 'react-router-dom'
import {
    createBrowserRouter,
} from "react-router-dom";
import { AppProvider } from './context/AppProvider.jsx'



ReactDOM.createRoot(document.getElementById('info')).render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
)

