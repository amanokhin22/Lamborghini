import styles from "../styles/lending.module.scss";
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import SwiperCore, {Autoplay, Navigation} from "swiper";
import React, {useEffect, useRef} from "react";
import initMap, {mapPromise} from "../polyfils/Map";

const SwipeNavigate: React.FC<{ isNext: boolean }> = ({isNext}) => {
    const swiper = useSwiper();
    if (isNext) {
        return (
            <div className={styles.blog__button}>
                <Image className={styles.swiper__button__prev} onClick={() => swiper.slidePrev()}
                       src="/arrow-left.svg" alt="" width={71}
                       height={30}/>
            </div>
        )
    }
    return (
        <div className={styles.blog__button}>
            <Image className={styles.swiper__button__next} onClick={() => swiper.slideNext()}
                   src="/arrow-right.svg" alt="" width={71}
                   height={30}/>
        </div>
    )
}

const Lending = () => {
    SwiperCore.use([Autoplay]);
    const mapContainer = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (mapContainer.current) {
            mapPromise.then(() => {
                initMap(mapContainer.current as HTMLElement)
            })
        }
    }, [])

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.navbar}>
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
                </div>
            </header>
            <main>
                <section className={styles.promo}>
                    <div className={styles.container}>
                        <div className={styles.promo__inner}>
                            <span className={styles.title1}>LAMBORGHINI SUPER TROFEO</span>
                            <span className={styles.title2}>Гранд-финал 2022
                                <span className={styles.title3}>3-6 ноября </span>
                            </span>
                            <span className={styles.title4}>автодром Портимао,Португалия</span>
                            <Link href={"/"} className={styles.slasher__image}>
                                <Image src="/slasher.svg" alt="" width={30}
                                       height={30}/>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.info}>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoPart1}>
                            <span className={styles.titleInfo}>СУПЕР ТРОФЕО МИРОВОЙ ФИНАЛ</span>
                            <div className={styles.InfoTexts}>
                                <div className={styles.infoTexts__left}>
                                    Мировой финал Lamborghini завершает каждый сезон
                                    Super Trofeo с 2013 года. Каждый год гонщики всех
                                    континентальных чемпионатов отправляются на разные трассы и
                                    принимают участие в двух 50-минутных спринтерских гонках,
                                    где определяется победитель в общем зачете, как чемпион мира Lamborghini.
                                    Мировой финал Lamborghini — это не только крупнейший
                                    гоночный уик-энд года, но и настоящий фестиваль автоспорта,
                                    который привлекает поклонников со всего мира.
                                </div>
                                <b>Парад владельцев, превью и развлечения в паддоке для
                                    болельщиков — это лишь некоторые из
                                    мероприятий, организованных в рамках мероприятия.
                                </b>
                            </div>
                            <Image className={styles.infoTexts__img} src="/race.jpg" alt={""} width={893} height={413}/>
                        </div>
                        <div className={styles.infoPart2}>
                            <div className={styles.trofeoLeftSide}>
                                <span className={styles.trofeoTitle}>КОМАНДЫ СУПЕР ТРОФЕО</span>
                                <p>Все автомобили, которые участвуют в чемпионатах
                                    Lamborghini Super Trofeo,
                                    управляются частными командами, которые используют свой опыт для тонкой настройки их
                                    для водителей.
                                    Для каждого континентального чемпионата Lamborghini Super Trofeo существуют рейтинги
                                    пилотов и команд.
                                </p>
                                <p>
                                    Пилоты и команды, участвующие в континентальной серии, каждый год соревнуются друг с
                                    другом в Гранд Финале Lamborghini,
                                    мероприятии, которое завершает спортивный сезон Super Trofeo. Две квалификационные
                                    сессии и две гонки определяют чемпионов мира серии.
                                    Каждый год Гранд-финал проводится на разных трассах, и в прошлых выпусках он уже
                                    затрагивал европейский, азиатский и американский континенты.
                                </p>
                            </div>
                            <Image className={styles.trofeo__img} src="/trofeo.jpg" alt='' width={437} height={360}/>
                        </div>
                        <div className={styles.infoPart3}>
                            <div className={styles.calendarText}>
                                <span className={styles.titleOfCalendar}>календарь сезона Super Trofeo Europe 2022
                                    года</span>
                                <div className={styles.descriptionCalendar}>
                                    14 в истории серии GT, посвященный
                                    автомобилям Lamborghini Huracan Super Trofeo Evo.
                                    Шесть этапов, в общей сложности 12 гонок и 600
                                    минут соревнований будут разыграны
                                    на некоторых из самых престижных трасс Европы.
                                </div>
                            </div>
                            <table className={styles.calendar}>
                                <tbody>
                                <tr>
                                    <td>Этап 1:</td>
                                    <td>Имола (Италия)</td>
                                    <td>1-3 апреля</td>
                                </tr>
                                <tr>
                                    <td>Этап 2:</td>
                                    <td>Ле-Кастелле (Франция)</td>
                                    <td>3–5 июня</td>
                                </tr>
                                <tr>
                                    <td>Этап 3:</td>
                                    <td>Мизано (Италия)</td>
                                    <td>1–3 июля</td>
                                </tr>
                                <tr>
                                    <td>Этап 4:</td>
                                    <td>Спа-Франкоршам (Бельгия)</td>
                                    <td>29–30 июля</td>
                                </tr>
                                <tr>
                                    <td>Этап 5:</td>
                                    <td>Барселона (Испания)</td>
                                    <td>30 сентября–2 октября</td>
                                </tr>
                                <tr>
                                    <td>Этап 6:</td>
                                    <td>Портимао (Португалия)</td>
                                    <td>3-4 ноября</td>
                                </tr>
                                <tr>
                                    <td>Гранд-финал 2022:</td>
                                    <td>Портимао (Португалия)</td>
                                    <td>5-6 ноября</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className={styles.track}>
                    <div className={styles.container}>
                        <h3 className={styles.trackTitle}>ТРЕК ПОРТИМАО</h3>
                        <p className={styles.trackInfo}>
                            Autodromo Internacional do Algarve находится в одноименном регионе
                            на юге Португалии, недалеко от города Портиман.
                            Открытый в октябре 2008 года автогоночный комплекс является одним из
                            самых современных в Европе, раскинувшись на площади около 300 гектаров
                            среди холмов, окружающих португальский город, а длина самой трассы составляет 4684 метра.
                        </p>
                        <Image className={styles.track__img} src="/track.png" alt="" width={743} height={333}/>
                    </div>
                </section>
                <section id="super" className={styles.evo}>
                    <div className={styles.evo__black}>
                        <div className={styles.container}>
                            <div className={styles.evo__black__inner}>
                                <div className={styles.evo__black__info}>
                                    <h3 className={styles.evo__black__title}>СУПЕР ТРОФЕО ЭВО</h3>
                                    <div className={styles.evo__black__infobox}>
                                        <p className={styles.evo__black__text}>
                                            Новый Huracán Super Trofeo EVO достигает еще больших высот, чем его
                                            прославленный предшественник,
                                            благодаря полностью переработанной аэродинамике. Huracán Super Trofeo EVO
                                            является идеальной стартовой
                                            площадкой для всех водителей, которые хотят начать карьеру в гонках класса
                                            GT.
                                        </p>
                                        <p className={styles.evo__black__text}>
                                            Huracán EVO — это эволюция самого успешного Lamborghini с двигателем V10. В
                                            результате тонкой настройки
                                            и усовершенствования существующих функций в сочетании с новыми
                                            конструктивными решениями, повышающими
                                            производительность, автомобиль выделяется своей способностью предугадывать и
                                            удовлетворять поведение, ожидания и желания водителя.
                                        </p>
                                    </div>
                                </div>
                                <Image className={styles.evo__black__img} src="/evo.png" alt="Huracán Super Trofeo EVO"
                                       width={725} height={214}/>
                                <dl className={styles.evo__descr__list}>
                                    <div>
                                        <dd>ПЕРЕМЕЩЕНИЕ</dd>
                                        <dt>5204 см³</dt>
                                    </div>
                                    <div>
                                        <dd>КРУТЯЩИЙ МОМЕНТ</dd>
                                        <dt>570 Нм при 6500 об/мин</dt>
                                    </div>
                                    <div>
                                        <dd>МОЩНОСТЬ (л.с.) / МОЩНОСТЬ (КВТ)</dd>
                                        <dt>620 л.с. при 8250 об/мин</dt>
                                    </div>
                                    <div>
                                        <dd>МАКС. СКОРОСТЬ</dd>
                                        <dt>325 км /ч</dt>
                                    </div>
                                    <div>
                                        <dd>0-100 КМ/Ч</dd>
                                        <dt> 2,9 с</dt>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className={styles.evo__white}>
                        <div className={styles.infoContainer}>
                            <div className={styles.evo__white__inner}>
                                <p className={styles.evo__white__text}>
                                    Его неповторимый дизайн — это естественная эволюция
                                    культовых линий Huracán, включающая новые сложные
                                    решения, поднимающие производительность и вызывающие
                                    эмоции на невиданный ранее уровень.
                                </p>
                                <p className={styles.evo__white__text}>
                                    Беспрецедентный обвес был разработан инженерами отдела
                                    автоспорта Automobili Lamborghini в сотрудничестве с Dallara
                                    Engineering и Lamborghini Centro Stile. Последний также разработал
                                    стартовую ливрею для автомобиля в честь партнерства между
                                    Lamborghini Squadra Corse и Roger Dubuis, которое началось в 2018 году.
                                </p>
                                <p className={styles.evo__white__text}>
                                    Среди наиболее очевидных изменений в обвесе Lamborghini Huracan Super Trofeo EVO
                                    — задний спойлер на заднем капоте и верхний воздухозаборник, которые делают его
                                    мгновенно узнаваемым для зрителей.
                                </p>
                                <div id="video" className={styles.evo__white__video}>
                                    <Link className={styles.evo__white__video__link}
                                          href={"https://www.youtube.com/watch?v=4Hn-uCkle-M"}>
                                        <Image className={styles.evo__white__video__img} src="/onVideo.svg" alt=""
                                               width={50} height={50}/>
                                        <span>смотреть онлайн</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.blog}>
                    <div className={styles.infoContainer}>
                        <h3 className={styles.blog__title}>БЛОГ</h3>
                        <div className={styles.blog__slider}>
                            <Swiper
                                className={styles.swiper__wrapper}
                                modules={[Navigation]}
                                spaceBetween={5}
                                loop={true}
                                autoplay={{
                                    delay: 4000
                                }
                                }
                                breakpoints={{
                                    // when window width is >= 412px
                                    412: {
                                        slidesPerView: 1,
                                        spaceBetween: 40
                                    },
                                    // when window width is >= 641px
                                    641: {
                                        slidesPerView: 2,
                                        spaceBetween: 5
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 5
                                    },
                                }}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwipeNavigate isNext={true}/>
                                <SwipeNavigate isNext={false}/>
                                <SwiperSlide className={styles.swiper__slide__race__item}>
                                    <Image className={styles.blog__item__img} src="/blog1.jpg" alt="" width={900}
                                           height={500}/>
                                    <h4 className={styles.blog__item__title}>НЕЛЬСОН ПИКЕ СТАЛ ПОБЕДИТЕЛЕМ ГРАНД-ФИНАЛА
                                        В ПОРТИМАНЕ</h4>
                                    <p className={styles.blog__item__text}>
                                        Нельсон Пике-младший из Ansa Motorsports обеспечил возвращение
                                        титула Lamborghini Super Trofeo Grand Finals в Северную Америку
                                        впервые с 2017 года после победы и второе место в паре 50-минутных
                                        гонок на Autodromo Nacionale do Algarve в Портимане.Между тем, титул
                                        Pro-Am был подорван, поскольку Брайан Ортис и Себастьян Карасо из Precision
                                        Performance Motorsports стали первым полностью пуэрто-риканским составом,
                                        выигравшим Гранд-финал, сделав это драматично после того,
                                    </p>
                                    <Link className={styles.blog__item__link}
                                          href={"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference"}>
                                        читать подробнее...
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.swiper__slide__blog__item}>
                                    <Image className={styles.blog__item__img} src="/blog2.jpg" alt="" width={437}
                                           height={250}/>
                                    <h4 className={styles.blog__item__title}>ГРАНД ФИНАЛ. ДЕНЬ 1</h4>
                                    <p className={styles.blog__item__text}>
                                        Утренний дождь означал, что мокрая гонка была объявлена до старта, и
                                        перед большинством экипажей стоял выбор: использовать слики или мокрые шины.
                                        Большинство участников предпочли мокрую трассу, но поулист Спинелли начал гонку
                                        на сликах
                                    </p>
                                    <Link href={"https://www.linkedin.com/in/artiom-manokhin-0b3648255/"}>читать
                                        подробнее...</Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.swiper__slide__blog__item}>
                                    <Image className={styles.blog__item__img} src="/blog5.jpg" alt="" width={437}
                                           height={250}/>
                                    <h4 className={styles.blog__item__title}>JavaScript</h4>
                                    <p className={styles.blog__item__text}>
                                        JavaScript — мультипарадигменный язык программирования. Поддерживает
                                        объектно-ориентированный, императивный и функциональный стили.
                                        Является реализацией спецификации ECMAScript.
                                        JavaScript обычно используется как встраиваемый язык для программного
                                        доступа к объектам приложений. Наиболее широкое применение находит в браузерах
                                        как язык сценариев для придания интерактивности веб-страницам.
                                        Основные архитектурные черты: динамическая типизация, слабая типизация,
                                        автоматическое управление памятью, прототипное программирование, функции как
                                        объекты первого класса.
                                    </p>
                                    <Link href={"https://ru.reactjs.org/"}>
                                        читать подробнее...
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.swiper__slide__blog__item}>
                                    <Image className={styles.blog__item__img} src="/blog6.jpg" alt="" width={437}
                                           height={250}/>
                                    <h4 className={styles.blog__item__title}>ИЩУ РАБОТУ</h4>
                                    <p className={styles.blog__item__text}>
                                        В императивных языках некоторые функции в процессе выполнения
                                        своих вычислений могут модифицировать значения глобальных переменных,
                                        осуществлять операции ввода-вывода, реагировать на исключительные
                                        ситуации, вызывая их обработчики. Такие функции называются функциями
                                        с побочными эффектами. Другим видом побочных эффектов является модификация
                                        переданных в функцию параметров (переменных), когда в процессе вычисления
                                        выходного значения функции изменяется и значение входного параметра.
                                    </p>
                                    <Link href={"https://redux-toolkit.js.org/"}>читать
                                        подробнее...</Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.swiper__slide__blog__item}>
                                    <Image className={styles.blog__item__img} src="/blog3.jpg" alt="" width={437}
                                           height={250}/>
                                    <h4 className={styles.blog__item__title}>Что-то в этом есть.</h4>
                                    <p className={styles.blog__item__text}>
                                        Главное - сущность, а частности можно и потом доучить!
                                    </p>
                                    <Link href={"https://swiperjs.com/react#swiper-props"}>читать
                                        подробнее...</Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.swiper__slide__blog__item}>
                                    <Image className={styles.blog__item__img} src="/blog4.jpg" alt="" width={437}
                                           height={250}/>
                                    <h4 className={styles.blog__item__title}>А кто ж спорит?</h4>
                                    <p className={styles.blog__item__text}>
                                        Я не хочу начинать холиварные темы по поводу того, какой фреймворк на JS круче,
                                        ведь и так всем понятно, что это Angular.
                                    </p>
                                    <Link href={"https://angular.io/"}>читать
                                        подробнее...</Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.swiper__slide__blog__item}>
                                    <Image className={styles.blog__item__img} src="/blog7.jpg" alt="" width={437}
                                           height={250}/>
                                    <h4 className={styles.blog__item__title}>CURRICULUM VITAE</h4>
                                    <p className={styles.blog__item__text}>
                                        Приветище! Господа наниматели, нужен гребец на галеру?
                                    </p>
                                    <Link href={"https://www.linkedin.com/in/artiom-manokhin-0b3648255"}>читать
                                        подробнее...</Link>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className={styles.blog__quote}>
                            <div className={styles.blog__quote__box}>
                                <blockquote className={styles.blockquote}>
                                    <cite className={styles.blockquote__name}>
                                        <span>Чемпион Am</span>
                                        Анджей Левандовски
                                    </cite>
                                    <p className={styles.blockquote__text}>
                                        «Я очень доволен титулом, моей второй победой
                                        в Am и четвертой в Super Trofeo, мне очень приятно
                                        делать это в этом году, потому что уровень
                                        соревнований очень высок. Должен сказать, сегодня
                                        было довольно легко, так как я все время контролировал ситуацию».
                                    </p>
                                </blockquote>
                                <blockquote className={styles.blockquote}>
                                    <cite className={styles.blockquote__name}>
                                        <span>Обладатель кубка Lamborghini</span>
                                        Жерар ван дер Хорст
                                    </cite>
                                    <p className={styles.blockquote__text}>
                                        «Здорово выиграть титул, спустя четыре года после последнего, а за это время
                                        произошло так много всего.
                                        Из-за COVID-19, а затем моей тяжелой аварии в Барселоне я не мог так много
                                        ездить в последние годы,
                                        поэтому я очень доволен своим возвращением. Сегодня утром была тяжелая гонка, но
                                        я справился».
                                        сказать, сегодня было довольно легко, так как я все время контролировал
                                        ситуацию».
                                    </p>
                                </blockquote>
                            </div>
                            <Image className={styles.blog__quote__img} src="/winner.png" alt="" width={500}
                                   height={300}/>
                        </div>
                    </div>
                </section>
                <footer id="footer" className={styles.footer}>
                    <div className={styles.container}>
                        <h3 className={styles.footer__title}>Контакты</h3>
                        <div className={styles.footer__top}>
                            <ul className={styles.footer__top__info}>
                                <li className={styles.footer__info__item}>
                                    <dl>
                                        <dt> ОБЩИЕ</dt>
                                        <dd>
                                            <Link href={"tel:+351282405600"}>
                                                +(351) 282 405 600
                                            </Link>
                                        </dd>
                                        <dd>
                                            <Link href={"tel:+351282405697"}>
                                                +(351) 282 405 697
                                            </Link>
                                        </dd>
                                        <dd>
                                            <Link href={"mailto:info@autodromodoalgarve.com"}>
                                                info@autodromodoalgarve.com
                                            </Link>
                                        </dd>
                                    </dl>
                                </li>
                                <li className={styles.footer__info__item}>
                                    <dl>
                                        <dt>БИЛЕТЫ</dt>
                                        <dd>
                                            <Link href={"tel:+380994615438"}>
                                                +(380) 99 461 54 38
                                            </Link>
                                        </dd>
                                        <dd>
                                            <Link href={"mailto:amanokhin22@gmail.com"}>
                                                amanokhin22@gmail.com
                                            </Link>
                                        </dd>
                                    </dl>
                                </li>
                                <li className={styles.footer__info__item}>
                                    <ul className={styles.social__list}>
                                        <li className={styles.social__list__item}>
                                            <Link className={styles.social__list__link} href={"/"}>
                                                <Image src={"/youtube.svg"} alt="" width={30} height={30}/>
                                            </Link>
                                        </li>
                                        <li className={styles.social__list__item}>
                                            <Link className={styles.social__list__link} href={"/"}>
                                                <Image src={"/inst.svg"} alt="" width={30} height={30}/>
                                            </Link>
                                        </li>
                                        <li className={styles.social__list__item}>
                                            <Link className={styles.social__list__link} href={"/"}>
                                                <Image src={"/facebook.svg"} alt="" width={30} height={30}/>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className={styles.footer__top__address}>
                                <p className={styles.footer__top__address__title}>АДРЕС</p>
                                <address className={styles.footer__top__address__text}>Sitio do Escampadinho,
                                    Mexilhoeira Grande, 8500-148 Portimao, Portugal
                                </address>
                                <div className={styles.map} ref={mapContainer}></div>

                            </div>
                        </div>
                        <div className={styles.footer__bottom}>
                            <span className={styles.footer__bottom__left}>Design by Varvara Prokopchuk
                                <br/>Work by AMANO
                            </span>
                            <Link href={"/"}>
                            <Image className={styles.footer__bottom__logo} src={"/footerLogo.svg"} alt="" width={50}
                                   height={58}/>
                            </Link>
                            <div>
                                <Link className={styles.footer__bottom__right} href={"/"}>
                                Политика конфиденциальности
                            </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Lending;
