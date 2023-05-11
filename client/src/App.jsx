import './App.css'
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">

      </div>
    )
  }
  const router = createBrowserRouter([
  ]);

  return <RouterProvider router={router} />;
}

    {
}
export default App;