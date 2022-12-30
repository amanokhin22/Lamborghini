import styles from "../../styles/buy.module.scss";
import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Box} from "@mui/material";
import {Models} from "./Models";

const style = {
    borderRadius: 3,
    minWidth: 150,
    maxWidth: 400,
    paddingTop: 150,
};

const styleModel = {
    color: "red",
}

export const Buy = () => {
    const [models, setModels] = useState('');
    const [showModels, setShowModels] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setModels(event.target.value as string);
        setShowModels(true);
    };

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
                        <Box style={style}>
                            <FormControl fullWidth>
                                <div>
                                    <InputLabel style={styleModel}  id="demo-simple-select-label">LAMBORGHINI
                                        MODELS</InputLabel>
                                </div>
                                <Select style={styleModel}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={models}
                                    label="ModelsList"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"AVENTADOR"}>AVENTADOR</MenuItem>
                                    <MenuItem value={"HURACAN"}>HURACAN</MenuItem>
                                    <MenuItem value={"URUS"}>URUS</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {showModels && <Models/>}
                    </div>
                </section>
            </main>
        </>
    )
};
