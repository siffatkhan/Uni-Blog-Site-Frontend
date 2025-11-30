
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}
export default App;

// All the routing and everything is in separate routes.jsx files 

