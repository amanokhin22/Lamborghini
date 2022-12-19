import type {AppProps} from "next/app";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import React from "react";
import Script from "next/script";

const App = ({Component, pageProps}: AppProps) => (
    <Layout>
        <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleApiKey}&callback=runMap&v=weekly`}
            defer={true}
        />
        <Component {...pageProps} />
    </Layout>

);

export default App;
