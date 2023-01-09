import styles from "../../styles/buy.module.scss";
import {FC} from "react";

export interface ModelsTypes {
    onClose: () => void;
    modelsId: string;
}

export const Models: FC<ModelsTypes> = ({onClose, modelsId}) => {

    return (
        <div className={styles.modal}>
            <div
                onClick={onClose}
                className={styles.modalOverlay}></div>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h3>Modal Title {modelsId}</h3>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={styles.modalBody}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, aperiam magni omnis perspiciatis ratione vel voluptate.
                    Alias aut commodi, debitis dicta harum illum labore possimus quasi repellendus tempora. Numquam,
                    odit?
                </div>
            </div>
        </div>
    )
};
