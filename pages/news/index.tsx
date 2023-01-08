import Head from "next/head";
import {News} from "../../components/detailed/News";
import {useRouter} from "next/router";
import {useAppDispatch} from "../../app/Hooks";
import {useEffect} from "react";
import {setActiveNewsId} from "../../redux/newsSlice";
import {fetchNews} from "../../redux/asyncThunkNews";

export const NewsPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const {id} = router.query

    useEffect(() => {
        dispatch(setActiveNewsId(id as string))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        dispatch(fetchNews())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title> News </title>
            </Head>
            <div>
                {/*{story ? <News newsItem={story}/> : "loading..."}*/}

                <News />
            </div>
        </div>
    )
}

export default NewsPage;
