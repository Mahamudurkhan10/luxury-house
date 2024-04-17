import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home.jsx';
import UserInfo from './Components/UserInfo.jsx';
import UpdateProfile from './Components/UpdateProfile.jsx';
import Adjoin from './Components/Adjoin.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import CardDeatails from './Pages/CardDeatails.jsx';
import Auth from './AuthProvider/Auth.jsx';
import Private from './Root/Private.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/userInfo',
        element: <Private><UserInfo></UserInfo></Private>
      }
      , {
        path: '/updateP',
        element: <Private><UpdateProfile></UpdateProfile></Private>
      },
      {
        path: '/adjoin',
        element: <Private><Adjoin></Adjoin></Private>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },{
        path:'/:id',
        element:<Private><CardDeatails></CardDeatails></Private>,
        loader:()=>fetch('luxury.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auth> <RouterProvider router={router}></RouterProvider></Auth>
  </React.StrictMode>,
)
