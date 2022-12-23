import styles from "../../styles/news.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Rating from '@mui/material/Rating';

export const News = () => {
    const [value, setValue] = React.useState<number | null>(2);
    //const pagesCount = useAppSelector(selectPageCount);
    //const currentPage = useAppSelector(selectCurrentPage);
    //const pagesCount = useAppSelector(selectPageCount);
    //const dispatch = useAppDispatch();

    // const onChangePage = (page: number) => {
    //     dispatch(setPage(page))
    // };

    // $('.show').click(function(){
    //     $(this).parent().find('.hidden').slideToggle(300);
    // })

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
                                    <li className={styles.news__table__item}>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                        <h3 className={styles.news__table__item__title}>ЗАГОЛОВОК</h3>
                                        <Image className={styles.news__table__img} src="/" alt="" width={480}
                                               height={230}/>
                                        <div className={styles.news__table__text}>Lamborghini Selezione Certified
                                            Pre-Owned – официальная программа, которая обеспечивает максимальную
                                            надёжность и безопасность для покупателей автомобилей Lamborghini с
                                            пробегом.
                                            <span className={styles.news__text__hidden}>
                                                Автомобили с пробегом отбираются в ходе процесса тщательной диагностики с
                                            использованием исключительно оригинальных запасных частей.
                                            Покупатели таких автомобилей могут воспользоваться поддержкой, аналогичной
                                            по объему гарантии Lamborghini на новые автомобили, и услугой помощи на
                                            дорогах сроком действия до 24 месяцев.
                                            Программа Lamborghini Selezione Certified Pre-Owned доступна только у
                                            официальных дилеров или сервисных центрах Lamborghini.
                                            </span>
                                        <button className={styles.news__show__button}>Показать</button>
                                        </div>
                                    </li>
                                </ul>
                                <ul className={styles.news__table}>
                                    <li className={styles.news__table__item}>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                        <h3 className={styles.news__table__item__title}>ЗАГОЛОВОК</h3>
                                        <Image src="/" alt="" width={480} height={230}/>
                                        <div className={styles.news__table__text}>Lamborghini – это прежде всего люди.
                                            Здесь у вас есть возможность быть самим собой и развивать свои способности.
                                            Мы хорошо знаем, что непревзойденные творения являются результатом вклада
                                            всех участников процесса, поэтому в основе наших проектов лежит
                                            сотрудничество всех подразделений компании,
                                            в рамках которого опыт и навыки каждого сливаются воедино в контексте
                                            культуры взаимного уважения и доверия. Вместе мы создаем ценность для всех
                                            наших заинтересованных сторон,
                                            поддерживая действенное сотрудничество с ними, обеспечивая устойчивый рост и
                                            оказывая положительное влияние на общество и на планету.</div>
                                    </li>
                                </ul>
                                <ul className={styles.news__table}>
                                    <li className={styles.news__table__item}>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                        <h3 className={styles.news__table__item__title}>ЗАГОЛОВОК</h3>
                                        <Image src="/" alt="" width={480} height={230}/>
                                        <div className={styles.news__table__text}>Восстановление Lamborghini представляет
                                            собой сложный,
                                            требующий высокого мастерства, опыта и особых профессиональных навыков
                                            процесс. Lamborghini Polo Storico
                                            обеспечивает контроль за всем процессом, выполняя работы по механической
                                            части внутри предприятия и сотрудничая
                                            с высококвалифицированными и опытными специалистами по кузовному ремонту и
                                            отделке салона. Каждый этап реставрации
                                            обсуждается с заказчиком и воплощается в жизнь специалистами Polo Storico.
                                            Компания Automobili Lamborghini занимается также производством оригинальных
                                            запасных частей для классических моделей,
                                            охватывая около 65% парка автомобилей. Это число растет из года в год для
                                            все более широкой гаммы моделей, от 350 GT
                                            до Diablo. Владельцы могут размещать заказы на запасные части через
                                            официальных дилеров Lamborghini.</div>
                                    </li>
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
