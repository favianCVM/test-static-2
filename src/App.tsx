import React from 'react';
import {Router} from "./components/routing/Router";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (<HelmetProvider>
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="¡Tu amigo te ha invitado a zumma!" />
      <meta property="og:description" content="Zumma es tu comunidad y plataforma de ahorro e inversión enfocada a enseñarte paso a paso cómo y en qué invertir y donde podrás seguir e interactuar con otros inversionistas como tú. Te ayudaremos a escoger en qué fondos de inversiones poner tu dinero a trabajar." />
      <meta name="image" property="og:image" content="https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg" />
    </Helmet>
    <Router />
  </HelmetProvider>);
}

export default App;
