import ClientLayout from "../layouts/ClientLayout";
import Homepage from "../pages/Client/Home/Homepage";
import Contact from "../pages/Client/Contact/Contact";

import OurServices from "../pages/Client/Services/OurServices";
import Projects from "../pages/Client/Projects/Projects";
import News from "../pages/Client/News/News";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import NotFound from "../pages/NotFound";

const ClientRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    { path: '', element: <Homepage /> },
    { path: 'contact', element: <Contact /> },

    { path: 'services', element: <OurServices /> },
    { path: 'projects/:id', element: <Projects /> },
    { path: 'news/:id', element: <News /> },

    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },

    { path: '*', element: <NotFound homePath="/"/> },
  ]
}

export default ClientRoutes;