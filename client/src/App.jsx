import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Orders from "./pages/orders/Orders";
import Projects from "./pages/customers/Projects";
import Project from "./pages/customers/Project";
import AddProject from "./pages/pros/AddProject";
import MyProjects from "./pages/pros/MyProjects";
import Messages from "./pages/messages/Messages";
import Message from "./pages/messages/Message";

function App() {
const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/orders",
          element: <Orders />
        },
        {
          path:"/projects",
          element: <Projects />
        },
        {
          path:"/project/:id",
          element: <Project />
        },
        {
          path:"/myprojects/:id",
          element: <MyProjects />
        },
        {
          path:"/addproject",
          element: <AddProject />
        },
        {
          path:"/messages",
          element: <Messages />
        },
        {
          path:"/message/:id",
          element: <Message />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;