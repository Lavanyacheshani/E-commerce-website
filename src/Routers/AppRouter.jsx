import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import User from '../Pages/User/User';
import Login from '../Pages/Login';
import UserProtected from './UserProtected';

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        element: <UserProtected />,
        children:[
          {
            path:"user" ,
            element: <User />
          }
        ]

      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

const AppRouter = () => {
  return <RouterProvider router={router}/>
};

export default AppRouter;
