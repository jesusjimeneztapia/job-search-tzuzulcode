import styles from '../styles/Select.module.css'

/**
 * @typedef {import('react').SelectHTMLAttributes<HTMLSelectElement> & {label: string, fill: boolean}} SelectProps
 */

/**
 * @param {SelectProps} props
 */
export default function Select({ children, id, label, value, fill, ...rest }) {
	return (
		<div className={`${styles.group} ${fill && styles.fill} ${value && styles.active}`}>
			<select className={styles.select} id={id} name={id} value={value} {...rest}>
				{children}
			</select>
			<label className={styles.label}>{label}</label>
		</div>
	)
}
