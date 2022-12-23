import Head from "next/head";
import {Race} from "../../components/detailed/Race";

export const RacePage = () => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> RACE </title>
            </Head>
            <div>
                <Race/>
            </div>
        </div>
    )
}

export default RacePage;
