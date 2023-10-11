import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../Layout/Layout";
import {HomePage} from '../../pages/HomePage';
import { Status404 } from "../../pages/404";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Status404 />
  },
  {
    path: "/:invitationCode",
    element: <HomePage />
  },
])

const Router = () => {
  return(
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export {
  Router
}