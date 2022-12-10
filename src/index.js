import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { history } from '../src/features/helpers/history';
import LoginRegister from "./features/login/LoginRegister"
import Login from './features/login/Login';

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginRegister/>,
  },
  {
    path:"/",
    element:<div>deneme</div>
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
