import Head from "next/head";
import {Buy} from "../../components/detailed/Buy";

export const BuyPage = () => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> Buy </title>
            </Head>
            <div>
                <Buy/>
            </div>
        </div>
    )
}

export default BuyPage;
