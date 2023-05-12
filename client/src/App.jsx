import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
// const Layout = () => {
    return (
      <div className="app">
        <NavBar />

      </div>
    )
  // }
  // const router = createBrowserRouter([
  // ]);

  // return <RouterProvider router={router} />;
}

export default App;