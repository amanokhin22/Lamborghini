import type {AppProps} from "next/app";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import React from "react";
import Script from "next/script";
import {Provider} from "react-redux";
import {store} from "../app/Store";


export const mapPromise = new Promise<void>(resolve => {
    if (typeof window !== "undefined") {
        // @ts-ignore
        window.runMap = () => {
            resolve()
        }
    }
})

const App = ({Component, pageProps}: AppProps) => (
    <Provider store={store}>
    <Layout>
        <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleApiKey}&callback=runMap&v=weekly`}
            defer={true}
        />
        <Component {...pageProps} />
    </Layout>
    </Provider>

);

export default App;
