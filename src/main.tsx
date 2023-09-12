import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../src/styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/HomePage.tsx';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import FilterPage from './pages/filter/FilterPage.tsx';
// import CssBaseline from '@mui/material/CssBaseline';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: 'filter',
    element: <FilterPage></FilterPage>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <RouterProvider router={router} />
      {/* <CssBaseline /> */}
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
