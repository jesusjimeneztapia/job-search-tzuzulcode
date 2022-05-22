import styles from '../styles/Input.module.css'

/**
 * @typedef {import('react').InputHTMLAttributes<HTMLInputElement> & {label: string, fill: boolean}} InputProps
 */

/**
 * @param {InputProps} props
 * @returns
 */
export default function Input({ id, label, value, fill, ...rest }) {
	return (
		<div className={`${styles.group} ${fill && styles.fill} ${value && styles.active}`}>
			<input className={styles.input} id={id} name={id} value={value} {...rest} />
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	)
}
