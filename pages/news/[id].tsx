import Head from "next/head";
import {News} from "../../components/detailed/News";

export const NewsPage = () => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> News </title>
            </Head>
            <div>
                <News/>
            </div>
        </div>
    )
}

export default NewsPage;
