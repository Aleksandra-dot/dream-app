import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1';
import reportWebVitals from './reportWebVitals';
import Carousel from './component/Carousel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarouselPage from './CarouselPage';
import YearPage from './YearPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path: '/archive',
    element: <CarouselPage />
  },
  {
    path: '/year',
    element: <YearPage/>
  }
  

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
