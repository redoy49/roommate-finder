import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
// import AddPost from "../pages/AddPost";
// import UpdatePost from "../pages/UpdatePost";
// import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import MyListings from "../pages/MyListings";
import BrowseListings from "../pages/BrowseListings";
import Login from "../pages/Login";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      // {
      //   path: "/add-post",
      //   element: (
      //     <PrivateRoute>
      //       <AddPost />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/my-listings",
        element: (
          // <PrivateRoute>
          //   <MyListings />
          // </PrivateRoute>
          <MyListings />
        ),
      },
      {
        path: "/browse",
        element: <BrowseListings />,
      },
      // {
      //   path: "/update/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdatePost />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/details/:id",
      //   element: (
      //     <PrivateRoute>
      //       <Details />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default router;
