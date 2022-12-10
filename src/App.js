import React from 'react';
import { setAuthToken } from './features/helpers/setAuthToken';
import Routers from "./features/helpers/routesSetting"
//import { Counter } from './features/counter/Counter';

function App() {
  debugger;
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }
  return (
    <div>
      
    </div>
  );
}

export default App;
