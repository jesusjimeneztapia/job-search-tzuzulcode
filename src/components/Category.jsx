import { useEffect, useState } from 'react'
import styles from '../styles/Category.module.css'

const COLORS = [
	'primary-400',
	'secondary-400',
	'success-400',
	'danger-400',
	'warning-400',
	'primary-600',
	'secondary-600',
	'success-600',
	'danger-600',
	'warning-600',
]

function useVariant() {
	const [variant, setVariant] = useState()

	useEffect(() => {
		setVariant(() => {
			const color = Math.floor(Math.random() * COLORS.length)
			return COLORS[color]
		})
	}, [])

	return variant
}

export default function Category({ category }) {
	const variant = useVariant()

	return <li className={`${styles.category} ${styles[variant]}`}>{category}</li>
}
