import styles from "../../styles/news.module.scss";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState} from "react";
import Rating from '@mui/material/Rating';
import {Pagination} from "../Pagination";
import {useAppDispatch, useAppSelector} from "../../app/Hooks";
import {selectCurrentPage, selectLoading, selectPageCount, selectPageNews} from "../../selectors/selectors";
import {setPage} from "../../redux/newsSlice";
import {fetchNews} from "../../redux/asyncThunkNews";

export const News = () => {
    const currentPage = useAppSelector(selectCurrentPage);
    const pagesCount = useAppSelector(selectPageCount);
    const loading = useAppSelector(selectLoading);
    const newsList = useAppSelector(selectPageNews);
    const dispatch = useAppDispatch();

    const onChangePage = (page: number) => {
        dispatch(setPage(page))
    };

    const [isActive, setActive] = useState<any>({

    });

    useEffect(() => {
        dispatch(fetchNews())
        dispatch(setPage(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggle = (id: string) => {
        setActive({
            ...isActive,
            [id] : !isActive[id]
        });
    };

    return (
        <>
            <header className={styles.header__news}>
                <div className={styles.navbar__news}>
                    <ul className={styles.menu__left}>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/races`}>О гонке</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/`}>Трек</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href="/#super">Lamborghini Super trofeo</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/news`}>Новости</Link>
                        </li>
                    </ul>
                    <Link href={`/`}>
                        <Image src="/logo.svg" className={styles.navbar__image} alt="logo" width={83}
                               height={95.7}/>
                    </Link>
                    <ul className={styles.menu__right}>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/buy`}> Купить</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href="/#video"> Смотреть онлайн</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href="/#footer">Контакты</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <section className={styles.news}>
                    <div className={styles.container}>
                        <div className={styles.news__inner}>
                            <h1 className={styles.news__title}>НОВОСТИ</h1>
                            <div className={styles.news__blocks}>
                                <ul className={styles.news__table}>
                                    { loading ? "Loading..." : (
                                        newsList.map((newsItem) => {
                                                return (
                                                    <li key={newsItem.id} className={styles.news__table__item}>
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={newsItem.rating}
                                                            onChange={(event, newValue) => {
                                                                console.log(newValue, "todo rating, when API is ready");
                                                            }}
                                                        />
                                                        <h3 className={styles.news__table__item__title}>{newsItem.title}</h3>
                                                        <Image className={styles.news__table__img} src={newsItem.image}
                                                               alt="" width={480}
                                                               height={230}/>
                                                        <div className={!isActive[newsItem.id] ? styles.news__table__text : ""}>
                                                            {newsItem.content}
                                                        </div>
                                                        <div onClick={() => handleToggle(newsItem.id)}
                                                             className={styles.news__show__button}>Показать
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        ))}
                                </ul>
                            </div>
                        </div>
                        {pagesCount > 1 ?
                            <Pagination currentPage={currentPage} onChangePage={onChangePage} pagesCount={pagesCount}/> : ""}
                        <Link className={styles.footer__link} href={"/"}>
                            <Image className={styles.footer__bottom__logo} src={"/footerLogo.svg"} alt=""
                                   width={50}
                                   height={58}/>
                            <span className={styles.footer__bottom__text}>RETURN</span>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
};
