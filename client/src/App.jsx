import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Orders from "./pages/orders/Orders";
import Projects from "./pages/customers/Projects";
import AddContract from "./pages/pros/AddContract";
import Contract from "./pages/pros/Contract";
import Contracts from "./pages/pros/Contracts";
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
          path:"/contracts",
          element: <Contracts />
        },
        {
          path:"/contract/:id",
          element: <Contract />
        },
        {
          path:"/addcontract",
          element: <AddContract />
        },
        {
          path:"/projects/:id",
          element: <Projects />
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