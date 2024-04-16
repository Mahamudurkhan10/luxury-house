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
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/userInfo',
        element:<UserInfo></UserInfo>
      }
      ,{
        path:'/updateP',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/adjoin',
        element:<Adjoin></Adjoin>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
