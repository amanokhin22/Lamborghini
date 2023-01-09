import styles from "../../styles/buy.module.scss";
import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Box} from "@mui/material";
import {Models} from "./Models";
import {useAppDispatch, useAppSelector} from "../../app/Hooks";
import {selectActiveModelsId, selectModelsList} from "../../selectors/selectors";
import {fetchModels} from "../../redux/asyncThunk";
import {setActiveModelsId} from "../../redux/lamboSlice";


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
    const models = useAppSelector(selectActiveModelsId);
    const modelsList = useAppSelector(selectModelsList);
    const dispatch = useAppDispatch();
    const [showModels, setShowModels] = useState(false);

    useEffect(() => {
        dispatch(fetchModels())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setActiveModelsId(event.target.value));
        setShowModels(true);
    };

    const handleClose = () => {
        setShowModels(false);
    };

    return (
        <>
            <header className={styles.header__buy}>
                <div className={styles.navbar__buy}>
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
                <section className={styles.main__buy}>
                    <div className={styles.container}>
                        <span className={styles.buy__title}>ВЫБЕРИ МЕЧТУ</span>
                        <Box style={style}>
                            <FormControl fullWidth>
                                <div>
                                    <InputLabel style={styleModel} id="demo-simple-select-label">LAMBORGHINI
                                        MODELS</InputLabel>
                                </div>
                                <Select style={styleModel}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={models}
                                        label="ModelsList"
                                        onChange={handleChange}
                                >
                                    {modelsList.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.selectTitle}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        {showModels && <Models onClose={handleClose} modelsId={models}/>}
                    </div>
                </section>
            </main>
        </>
    )
};
