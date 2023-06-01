import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Messages from "./pages/messages/Messages";
import Message from "./pages/messages/Message";

// import Projects from "./pages/customers/Projects";
// import AddContract from "./pages/pros/AddContract";
// import Contract from "./pages/pros/Contract";
// import MyContracts from "./pages/pros/MyContracts";
import Contracts from "./pages/contract/Contracts";

import Service from "./pages/pros/Service";
import Services from "./pages/pros/Services";
import MyServices from "./pages/pros/MyServices";
import AddService from "./pages/pros/AddService";


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
          path:"/services",
          element: <Services />
        },
        {
          path:"/service/:id",
          element: <Service />
        },
        {
          path:"/addservice",
          element: <AddService />
        },
        {
          path:"/myservices",
          element: <MyServices />
        },
        {
          path:"/contracts",
          element: <Contracts />
        },
        // {
        //   path:"/contract/:id",
        //   element: <Contract />
        // },
        // {
        //   path:"/addcontract",
        //   element: <AddContract />
        // },
        // {
        //   path:"/mycontracts",
        //   element: <MyContracts />
        // },
        {
          path:"/messages",
          element: <Messages />
        },
        {
          // path:"/message/:id"
          path:"/message/1",
          element: <Message />
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;