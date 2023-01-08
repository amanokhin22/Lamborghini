import styles from "../../styles/race.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import SwiperCore, {Autoplay, Navigation} from "swiper";

export const Race = () => {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.navbar__race}>
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
                <section>
                    <div>
                        <div>
                            <Swiper
                                className={styles.swiper__wrapper}
                                modules={[Navigation]}
                                loop={true}
                                autoplay={{
                                    delay: 10000
                                }
                                }
                                slidesPerView={1}
                            >
                                <SwiperSlide className={styles.swiper__slide__race__item}>
                                    <h1 className={styles.swiper__title}>LET RACE WITH DIABLO BEGIN</h1>
                                    <Image className={styles.race__item__img} src="/blackSport.jpg" alt="" width={1550}
                                           height={650}
                                    />
                                    <Link href={"/"}>
                                        <Image className={styles.footer__bottom__logo} src={"/footerLogo.svg"} alt=""
                                               width={50}
                                               height={58}/>
                                        <span className={styles.footer__bottom__text}>RETURN</span>
                                    </Link>
                                </SwiperSlide>

                                <SwiperSlide className={styles.swiper__slide__race__item}>
                                    <h1 className={styles.swiper__title2}>It`s smells like teen spirit</h1>
                                    <Image className={styles.race__item__img} src="/greenSport.jpg" alt="" width={1550}
                                           height={650}/>
                                    <Link className={styles.footer__link} href={"/"}>
                                        <Image className={styles.footer__bottom__logo} src={"/footerLogo.svg"} alt=""
                                               width={50}
                                               height={58}/>
                                        <span className={styles.footer__bottom__text}>RETURN</span>
                                    </Link>
                                </SwiperSlide>

                                <SwiperSlide className={styles.swiper__slide__race__item}>
                                    <h1 className={styles.swiper__title3}>YOU SHOULD IT TRY</h1>
                                    <Image className={styles.race__item__img} src="/mainSport.jpg" alt="" width={1550}
                                           height={650}/>
                                    <Link href={"/"}>
                                        <Image className={styles.footer__bottom__logo} src={"/footerLogo.svg"} alt=""
                                               width={50}
                                               height={58}/>
                                        <span className={styles.footer__bottom__text}>RETURN</span>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};
