import styles from '../styles/Modal.module.scss';

interface Props {
	children: React.ReactNode;
	closeModal: () => void;
}

const Modal = ({ children, closeModal }: Props) => {
	return (
		<div className={styles.modal} onClick={closeModal}>
			<div className={styles.background} />
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Modal;
