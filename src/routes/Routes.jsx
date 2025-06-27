import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import BrowseLists from "../pages/BrowseLists";
import CardDetails from "../pages/CardDetails";
import ContactUs from "../pages/ContactUs";
// import Blog from "../pages/Blog"; // Assuming you created Blog page
import MyLists from "../pages/MyLists";
import AddLists from "../pages/AddLists";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardWelcome from "../pages/DashboardWelcome";
import UpdateList from "../pages/UpdateList";
import AboutUs from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://roommate-finder-server-xi.vercel.app/lists/feature"),
        element: <Home />,
      },
      {
        path: "/browse-lists",
        loader: () =>
          fetch("https://roommate-finder-server-xi.vercel.app/lists"),
        element: <BrowseLists />,
      },
      {
        path: "/card-details/:id",
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-xi.vercel.app/lists/${params.id}`),
        element: <CardDetails />,
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  // Dashboard routes (Private)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DashboardWelcome/>
      },
      {
        path: "add-lists",
        element: <AddLists />,
      },
      {
        path: "my-lists",
        element: <MyLists />,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`https://roommate-finder-server-xi.vercel.app/lists/${params.id}`),
        element: <UpdateList />,
      },
    ],
  },
]);

export default router;
