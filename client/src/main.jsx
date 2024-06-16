import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Explore from './pages/Explore.jsx'
import './index.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<App />} >
      <Route path = "/signin" element={<Login />} />
      <Route path = "/signup" element={<Register />} />
      </Route>
      <Route path="explore" element={<Explore />} />
      <Route path="favourite" />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
