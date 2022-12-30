import styles from "../../styles/models.module.scss";
import Image from "next/image";
import React, { useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {FormControl, TextareaAutosize} from '@mui/material';
import {ModelsList} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../app/Hooks";
import {selectIsModalOpen, selectLoadingModels, selectModalModel, selectModelsList} from "../../selectors/selectors";
import {fetchModels, fetchNews} from "../../redux/asyncThunkNews";
import {closeModal} from "../../redux/modalSlice";


export const Models = () => {
    const loading = useAppSelector(selectLoadingModels);
    const modelsList = useAppSelector(selectModelsList);
    const isOpen = useAppSelector(selectIsModalOpen);
    const model: ModelsList = useAppSelector(selectModalModel)!;
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchModels())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const [title, setName] = useState('');

    useEffect(() => {
        setName(model ? model.title : '')
    }, [model])

    const handleEditModal = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setName(event.target.value)
    }

    // const submit = () => {
    //     if (title === model.title) {
    //         return;
    //     }
    //     if (title.length <= 3) {
    //         setName(model.title)
    //     } else {
    //         dispatch(putModel({...model, title}))
    //     }
    // };

    // const handleAddEditModelEnter = (event: React.KeyboardEvent) => {
    //     if (event.key === "Enter") {
    //         submit();
    //     }
    // };
    //
    // const handleAddEditModelOut = () => {
    //     submit();
    // };

    const handleClose = () => dispatch(closeModal());


    return (
        <>
            <div>
                <Modal
                    keepMounted
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box className={styles.boxNeedMoreLongNameOfTheStyleBecauseTheMaterial}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{mt: 2}}>
                            {model && model.title}
                        </Typography>
                        <FormControl>

                            {/*<TextareaAutosize onBlur={handleAddEditModelOut} onKeyDown={handleAddEditModelEnter}*/}
                            {/*                  value={title} onChange={handleEditModal}*/}
                            {/*                  className={styles.textarea} autoFocus={true}/>*/}
                        </FormControl>

                        <ul className={styles.news__table}>
                            { loading ? "Loading..." : (
                                modelsList.map((modelItem: ModelsList) => <li key={modelItem.id}
                                                                          className={styles.news__table__item}>

                                        <h3 className={styles.news__table__item__title}>{modelItem.title}</h3>
                                        <Image className={styles.news__table__img} src={modelItem.image}
                                               alt="" width={480}
                                               height={230}/>
                                    </li>
                                ))}
                        </ul>
                    </Box>
                </Modal>
            </div>
        </>
    )
};
