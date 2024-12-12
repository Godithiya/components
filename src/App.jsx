import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Compage1 from './pages/Compage1'
import Compage2 from './pages/Compage2'
import Compage3 from './pages/Compage3'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'compage1',
        element: <Compage1/>
      },
      {
        path: 'compage2',
        element: <Compage2/>
      },
      {
        path: 'compage3',
        element: <Compage3/>
      },
      {
        path: '*',
        element: <NotFound/>
      },
    ]
  }
]);

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export {
  App,
  router
}