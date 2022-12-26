import styles from "../../styles/news.module.scss";
import Link from "next/link";
import Image from "next/image";
import React, {FC, useState} from "react";
import Rating from '@mui/material/Rating';

export interface News {
    id: number;
    rating: number;
    image: string;
    title: string;
    content: string;
}

const newsList = [
    {
        id: 1,
        rating: 3,
        image: "/blog3.jpg",
        title: "Заголовок",
        content: "Lamborghini Selezione Certified\n" +
            "                                                    Pre-Owned – официальная программа, которая обеспечивает максимальную\n" +
            "                                                    надёжность и безопасность для покупателей автомобилей Lamborghini с\n" +
            "                                                    пробегом.\n" +
            "                                                    Автомобили с пробегом отбираются в ходе процесса тщательной диагностики с\n" +
            "                                                    использованием исключительно оригинальных запасных частей.\n" +
            "                                                    Покупатели таких автомобилей могут воспользоваться поддержкой, аналогичной\n" +
            "                                                    по объему гарантии Lamborghini на новые автомобили, и услугой помощи на\n" +
            "                                                    дорогах сроком действия до 24 месяцев.\n" +
            "                                                    Программа Lamborghini Selezione Certified Pre-Owned доступна только у\n" +
            "                                                    официальных дилеров или сервисных центрах Lamborghini.",
    },
    {
        id: 2,
        rating: 5,
        image: "/blog3.jpg",
        title: "Заголовок",
        content: "Lamborghini Selezione Certified\n" +
            "                                                    Pre-Owned – официальная программа, которая обеспечивает максимальную\n" +
            "                                                    надёжность и безопасность для покупателей автомобилей Lamborghini с\n" +
            "                                                    пробегом.\n" +
            "                                                    Автомобили с пробегом отбираются в ходе процесса тщательной диагностики с\n" +
            "                                                    использованием исключительно оригинальных запасных частей.\n" +
            "                                                    Покупатели таких автомобилей могут воспользоваться поддержкой, аналогичной\n" +
            "                                                    по объему гарантии Lamborghini на новые автомобили, и услугой помощи на\n" +
            "                                                    дорогах сроком действия до 24 месяцев.\n" +
            "                                                    Программа Lamborghini Selezione Certified Pre-Owned доступна только у\n" +
            "                                                    официальных дилеров или сервисных центрах Lamborghini.",
    },
    {
        id: 3,
        rating: 4,
        image: "/blog4.jpg",
        title: "Заголовок",
        content: "Lamborghini Selezione Certified\n" +
            "                                                    Pre-Owned – официальная программа, которая обеспечивает максимальную\n" +
            "                                                    надёжность и безопасность для покупателей автомобилей Lamborghini с\n" +
            "                                                    пробегом.\n" +
            "                                                    Автомобили с пробегом отбираются в ходе процесса тщательной диагностики с\n" +
            "                                                    использованием исключительно оригинальных запасных частей.\n" +
            "                                                    Покупатели таких автомобилей могут воспользоваться поддержкой, аналогичной\n" +
            "                                                    по объему гарантии Lamborghini на новые автомобили, и услугой помощи на\n" +
            "                                                    дорогах сроком действия до 24 месяцев.\n" +
            "                                                    Программа Lamborghini Selezione Certified Pre-Owned доступна только у\n" +
            "                                                    официальных дилеров или сервисных центрах Lamborghini.",
    }

]


export const News: FC<News> = () => {
    const [value, setValue] = useState<number | null>(2);
    //const pagesCount = useAppSelector(selectPageCount);
    //const currentPage = useAppSelector(selectCurrentPage);
    //const pagesCount = useAppSelector(selectPageCount);
    //const dispatch = useAppDispatch();

    // const onChangePage = (page: number) => {
    //     dispatch(setPage(page))
    // };

    const [isActive, setActive] = useState<any>({
        1: true,
        2: false
    });

    const handleToggle = (id: number) => {
        console.log(id);
        console.log(isActive);
        isActive[id] = !isActive[id];
        setActive(isActive);
    };

    return (
        <>
            <header className={styles.header__news}>
                <div className={styles.navbar__news}>
                    <ul className={styles.menu__left}>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/lamboPages/Race`}>О гонке</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/`}>Трек</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href="/#super">Lamborghini Super trofeo</Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/news/News`}>Новости</Link>
                        </li>
                    </ul>
                    <Image src="/logo.svg" className={styles.navbar__image} alt="logo" width={83}
                           height={95.7}/>
                    <ul className={styles.menu__right}>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/buy/Buy`}> Купить</Link>
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
                                    {
                                        newsList.map((newsItem: News) => {
                                                return (
                                                    <li key={newsItem.id} className={styles.news__table__item}>
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={newsItem.rating}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                        <h3 className={styles.news__table__item__title}>{newsItem.title}</h3>
                                                        <Image className={styles.news__table__img} src={newsItem.image}
                                                               alt="" width={480}
                                                               height={230}/>
                                                        <div className={isActive[newsItem.id] ? styles.news__table__text : ""}>
                                                            {newsItem.content}
                                                        </div>
                                                        <div onClick={() => handleToggle(newsItem.id)}
                                                             className={styles.news__show__button}>Показать
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        )}
                                </ul>
                            </div>
                        </div>
                        {/*{pagesCount > 1 ?*/}
                        {/*    <Pagination currentPage={currentPage} onChangePage={onChangePage} pagesCount={pagesCount}/> : ""}*/}
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
