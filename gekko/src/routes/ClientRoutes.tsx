import ClientLayout from "../layouts/ClientLayout";
import Homepage from "../pages/Client/Home/Homepage";
import Projects from "../pages/Client/Projects/Projects";
import Contact from "../pages/Client/Contact/Contact";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound";

const ClientRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    { path: '', element: <Homepage /> },
    { path: 'projects/:id', element: <Projects /> },
    { path: 'contact', element: <Contact /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: '*', element: <NotFound homePath="/"/> },
  ]
}

export default ClientRoutes;