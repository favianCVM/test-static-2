import React from 'react';
import {Router} from "./components/routing/Router";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (<HelmetProvider>
    <Helmet>
      <title>¡Tu amigo te ha invitado a zumma!</title>
      <meta name="title" content="¡Tu amigo te ha invitado a zumma!" />
      <meta name="description" content="Zumma es tu comunidad y plataforma de ahorro e inversión enfocada a enseñarte paso a paso cómo y en qué invertir y donde podrás seguir e interactuar con otros inversionistas como tú. Te ayudaremos a escoger en qué fondos de inversiones poner tu dinero a trabajar." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="¡Tu amigo te ha invitado a zumma!" />
      <meta property="og:description" content="Zumma es tu comunidad y plataforma de ahorro e inversión enfocada a enseñarte paso a paso cómo y en qué invertir y donde podrás seguir e interactuar con otros inversionistas como tú. Te ayudaremos a escoger en qué fondos de inversiones poner tu dinero a trabajar." />
      <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="¡Tu amigo te ha invitado a zumma!" />
      <meta property="twitter:description" content="Zumma es tu comunidad y plataforma de ahorro e inversión enfocada a enseñarte paso a paso cómo y en qué invertir y donde podrás seguir e interactuar con otros inversionistas como tú. Te ayudaremos a escoger en qué fondos de inversiones poner tu dinero a trabajar." />
      <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
    </Helmet>
    <Router />
  </HelmetProvider>);
}

export default App;
