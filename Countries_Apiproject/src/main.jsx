import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Contact from './component/contact.jsx';
import Home from './component/home.jsx';
import Error from './component/Error.jsx';
import CountryDetails from './component/CountryDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <CountryDetails/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
