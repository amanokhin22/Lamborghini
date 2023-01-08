import Head from "next/head";
import Landing from "../components/Landing";
import React from "react";

const Home = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> LAMBORGHINI RACING </title>
            </Head>
            <div>
                <Landing/>
            </div>
        </div>
    )
}

export default Home;
