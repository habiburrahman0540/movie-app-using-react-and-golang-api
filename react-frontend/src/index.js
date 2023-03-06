import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage';
import HomePage from "./Pages/Home"
import MoviePage from "./Pages/MoviePage"
import Genres from './Pages/Genres';
import EditMovie from './Pages/EditMovie';
import Catalogue from './Pages/Catalogue';
import GraphQL from './Pages/GraphQL';
import Login from './Pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'/movies',
        element:<MoviePage/>
      },
      {
        path:'/genres',
        element:<Genres/>
      },
      {
        path:'/add-movie',
        element:<EditMovie/>
      },
      {
        path:'/catalogue',
        element:<Catalogue/>
      },
      {
        path:'/graphql',
        element:<GraphQL/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);

