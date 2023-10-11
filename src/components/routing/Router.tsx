import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../Layout/Layout";
import {HomePage} from '../../pages/HomePage';
import { Status404 } from "../../pages/404";
import {Helmet} from "react-helmet";

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
      {/* @ts-ignore */}
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="¡Tu amigo te ha invitado a zumma!" />
        <meta property="og:description" content="Zumma es tu comunidad y plataforma de ahorro e inversión enfocada a enseñarte paso a paso cómo y en qué invertir y donde podrás seguir e interactuar con otros inversionistas como tú. Te ayudaremos a escoger en qué fondos de inversiones poner tu dinero a trabajar." />
        <meta name="image" property="og:image" content="https://files.slack.com/files-tmb/T03PBQZB144-F060B2GM68M-b0c0bd86d2/preview_480.png" />
      </Helmet>

      <RouterProvider router={router} />
    </Layout>
  )
}

export {
  Router
}