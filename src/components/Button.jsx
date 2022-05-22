import styles from '../styles/Button.module.css'

/**
 * @typedef {import('react').ButtonHTMLAttributes<HTMLButtonElement> & {variant: ('primary'|'secondary'|'success'|'danger'|'warning')}} ButtonProps
 */

/**
 *
 * @param {ButtonProps} props
 * @returns
 */
export default function Button({ children, variant = 'primary', ...rest }) {
	return (
		<button className={`${styles.button} ${styles[variant]}`} {...rest}>
			{children}
		</button>
	)
}
