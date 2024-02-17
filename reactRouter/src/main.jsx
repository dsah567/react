import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from './routes/Root.jsx'
import ErrorPage from './ErrorPage.jsx'
import Contact from './routes/Contact.jsx'
import About from './routes/About.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'contact/:contactId',
        element:<Contact/>,
        children:[
          {
            path:'about',
            element:<About/>,
          }
        ],
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
