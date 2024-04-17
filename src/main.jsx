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
        element: <UserInfo></UserInfo>
      }
      , {
        path: '/updateP',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/adjoin',
        element: <Adjoin></Adjoin>
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
        element:<CardDeatails></CardDeatails>,
        loader:()=>fetch('luxury.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
