import ClientLayout from "../layouts/ClientLayout";
import Homepage from "../pages/Client/Home/Homepage";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import About from "../pages/Client/About/About";
import Collections from "../pages/Client/Collections/Collections";

import NotFound from "../pages/NotFound";

const ClientRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    { path: '', element: <Homepage /> },

    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },

    { path: 'about', element: <About /> },
    { path: 'collections', element: <Collections /> },

    { path: '*', element: <NotFound homePath="/"/> },
  ]
}

export default ClientRoutes;