import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
// import UpdatePost from "../pages/UpdatePost";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import BrowseLists from "../pages/BrowseLists";
import MyLists from "../pages/MyLists";
import AddLists from "../pages/AddLists";
import CardDetails from "../pages/CardDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateList from "../pages/UpdateList";

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
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/add-lists",
        element: (
          <PrivateRoute>
            <AddLists />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-lists",
        element: (
          <PrivateRoute>
            <MyLists />
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-lists",
        loader: () =>
          fetch("https://roommate-finder-server-xi.vercel.app/lists"),
        element: <BrowseLists />,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-xi.vercel.app/lists/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateList />
          </PrivateRoute>
        ),
      },
      {
        path: "/card-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-xi.vercel.app/lists/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
