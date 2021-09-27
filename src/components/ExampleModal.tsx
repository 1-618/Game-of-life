import React from 'react';
import styles from './Modal.module.css';
import { TiDeleteOutline } from 'react-icons/ti'

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ExampleModal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    }

    return isOpen ? (
        <div className={styles.modal}>
            <div
                ref={outsideRef}
                className={styles.modal_overlay}
                onClick={handleCloseOnOverlay}
            />
            <div className={styles.modal_box}>
                <TiDeleteOutline className={styles.modal_close}
                    onClick={onClose}
                />
                <div className={styles.modal_title}>
                    {title}
                </div>
                <div className={styles.modal_content}>
                    { children }
                </div>
            </div>
        </div>
    ) : null;
};
