import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import ToyDetails from './components/ToyDetails/ToyDetails.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyToys from './components/MyToys/MyToys.jsx';
import UpdateToy from './components/UpdateToy/UpdateToy.jsx';
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Register></Register>
      },
      {
        path:'/addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path:'/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/toy/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
      },
      ,
      {
        path:'/updateToy/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
