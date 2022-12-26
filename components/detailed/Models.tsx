import styles from "../../styles/models.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export interface Models {
    id: number;
    image: string;
    title: string;
    content: string;
}
const modelsList = [
    {
        id: 1,
        image: "/blog3.jpg",
        title: "Заголовок",
        content: "Lamborghini Selezione Certified"
    },
    {
        id: 2,
        image: "/blog4.jpg",
        title: "Заголовок",
        content: "Lamborghini Selezione Certified"
    },
]

export const Models = () => {

    return (
        <>
            <header className={styles.header__models}>
                <div className={styles.navbar__models}>
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
                <section className={styles.models}>
                    <div className={styles.container}>
                        <div className={styles.models__inner}>
                                <ul className={styles.news__table}>
                                    {
                                        modelsList.map((modelItem: Models) => {
                                                return (
                                                    <li key={modelItem.id} className={styles.news__table__item}>

                                                        <h3 className={styles.news__table__item__title}>{modelItem.title}</h3>
                                                        <Image className={styles.news__table__img} src={modelItem.image}
                                                               alt="" width={480}
                                                               height={230}/>
                                                    </li>
                                                )
                                            }
                                        )}
                                </ul>
                            </div>
                        </div>
                        <Link className={styles.footer__link} href={"/buy/Buy"}>
                            <Image className={styles.footer__bottom__logo} src={"/footerLogo.svg"} alt=""
                                   width={50}
                                   height={58}/>
                            <span className={styles.footer__bottom__text}>RETURN</span>
                        </Link>
                </section>
            </main>
        </>
    )
};
