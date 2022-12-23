import styles from "../../styles/buy.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Buy = () => {
    return (
        <>
            <header className={styles.header__buy}>
                <div className={styles.navbar__buy}>
                    <ul className={styles.menu__left}>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={`/races/Race`}>О гонке</Link>
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
                <section className={styles.main__buy}>
                    <div className={styles.container}>
                        <span className={styles.buy__title}>ВЫБЕРИ МЕЧТУ</span>

                    </div>
                </section>
            </main>
        </>
    )
};
