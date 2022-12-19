import Head from "next/head";
import Lending from "../components/Lending";
import React from "react";

const Home = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> LAMBORGHINI RACING </title>
            </Head>
            <div>
                <Lending/>
            </div>
        </div>
    )
}

export default Home;
