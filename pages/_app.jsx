import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" />
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css"
        rel="stylesheet"
        type="text/css"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
