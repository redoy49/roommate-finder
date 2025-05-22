import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
// import AddPost from "../pages/AddPost";
// import UpdatePost from "../pages/UpdatePost";
// import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import MyListings from "../pages/MyLists";
import BrowseListings from "../pages/BrowseLists";
import Login from "../pages/Login";
import BrowseLists from "../pages/BrowseLists";
import MyLists from "../pages/MyLists";
import AddLists from "../pages/AddLists";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { 
        index: true,
        loader: () => fetch('http://localhost:3000/lists'),
        element: <Home /> 
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/add-lists",
        element: (
          // <PrivateRoute>
          <AddLists />
        ),
      },
      {
        path: "/my-lists",
        element: (
          // <PrivateRoute>
          //   <MyListings />
          // </PrivateRoute>
          <MyLists />
        ),
      },
      {
        path: "/browse-lists",
        element: <BrowseLists />,
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
