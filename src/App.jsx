import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

// Main Pages
import Home from './pages/Home';

// Subpage Components
import IndexButton from './pages/Compage1/Button/IndexButton';
import IndexCards from './pages/Compage1/Card/IndexCards';
import IndexImages from './pages/Compage1/Image/IndexImages';
import MainContent1 from './pages/Compage1/MainContent1';
import MainContent2 from './pages/Compage2/MainContent2';
import IndexModals from './pages/Compage2/Modal/IndexModals';
import IndexForm from './pages/Compage2/Form/IndexForm';
import IndexTable from './pages/Compage2/DataTable/IndexTable';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <NotFound/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'compage1',
          element: <MainContent1/>,
          children: [
            {
              path: '/compage1/buttons',
              element: <IndexButton/>
            },
            {
              path: '/compage1/cards',
              element: <IndexCards/>
            },
            {
              path: '/compage1/images',
              element: <IndexImages/>
            }
          ]
        },
        {
          path: 'compage2',
          element: <MainContent2/>,
          children: [
            {
              path: '/compage2/modals',
              element: <IndexModals/>
            },
            {
              path: '/compage2/forms',
              element: <IndexForm/>
            },
            {
              path: '/compage2/tables',
              element: <IndexTable/>
            }
          ]
        },
        {
          path: 'compage3',
          element: null,
          children: [
            {
              path: 'option1',
              element: null
            },
            {
              path: 'option2',
              element: null
            },
            {
              path: 'option3',
              element: null
            }
          ]
        },
        {
          path: '*',
          element: <NotFound/>
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App