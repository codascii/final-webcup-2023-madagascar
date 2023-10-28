import Layout from "@/components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useEffect } from "react";

// Material Symbols
import "../public/vendor/fonts/google-font.css";

// animation css
import "../public/vendor/animation/animate.css";

// slick css
import "slick-carousel/slick/slick.css";

//main css
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>AlteSphere - Prédiction des catastrophes naturelle par IA</title>
          <meta
            name="description"
            content="L'IA au service de la prediction des catastrophes naturelles"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>AlteSphere - Prédiction des catastrophes naturelle par IA</title>
        <meta
          name="description"
          content="L'IA au service de la prediction des catastrophes naturelles"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
