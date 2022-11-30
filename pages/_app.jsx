import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="tableau-api-cdn"
        src="https://public.tableau.com/javascripts/api/tableau-2.min.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
