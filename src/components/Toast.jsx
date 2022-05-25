import { useToast } from '../context/providers/ToastProvider'
import styles from '../styles/Toast.module.css'
import CloseIcon from './icons/CloseIcon'

export default function Toast() {
	const { show, color, message, closeToast } = useToast()

	if (!show) {
		return <></>
	}

	return (
		<div className={`${styles.toast} ${styles[color]}`}>
			<header>
				<CloseIcon onClick={closeToast} />
			</header>
			<p>{message}</p>
		</div>
	)
}
