import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Explore from './pages/Explore.jsx'
import Popular from './pages/Popular.jsx'
import About from './pages/About.jsx'
import Favorite from './pages/Favorite.jsx'
import Profile from './pages/Profile.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import MainPage from './components/MainPage.jsx'
import Layout from './components/Layout.jsx'
import './index.css'
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
      <Route path="" element={<App />}>
        <Route path="sign-up" element={<Register />} />
        <Route path="sign-in" element={<Login />} />
      </Route>
      <Route path="/explore/" element={<Layout />}>
        <Route path="" element={<Explore />}/>
        <Route path="d/:destinationId" element={<MainPage />} />
      </Route>

      <Route path="/popular" element={<Popular />}/>
      <Route path="/favorite" element={<Favorite />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/profile" element={<Profile />}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
