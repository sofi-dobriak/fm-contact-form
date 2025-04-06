import styles from './Modal.module.css';
import { IoIosClose } from 'react-icons/io';
import { CiCircleCheck } from 'react-icons/ci';

const Modal = ({ isOpen, toggleModal }) => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.modal} ${isOpen ? styles.isOpen : ''}`}>
                <IoIosClose onClick={toggleModal} className={styles.closeIcon} />
                <div className={styles.closeIconTitleContainer}>
                    <CiCircleCheck className={styles.checkIcon} />
                    <h2 className={styles.title}>Message Sent!</h2>
                </div>
                <p className={styles.description}>
                    Thanks for completing the form. We'll be in touch soon!
                </p>
            </div>
        </div>
    );
};

export default Modal;
