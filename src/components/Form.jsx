import { useState } from 'react'
import styles from '../styles/Form.module.css'

/**
 * @typedef {{children: import('react').ReactNode, onSubmit: Function}} FormProps
 */

/**
 * @param {FormProps} props
 */
export default function Form({ children, onSubmit }) {
	/**
	 * @type {import('react').FormEventHandler<HTMLFormElement>}
	 */
	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(e)
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			{children}
		</form>
	)
}

/**
 * @param {object} initialState
 */
export function useForm(initialState) {
	const [state, setState] = useState(initialState)

	/**
	 * @type {import('react').ChangeEventHandler<HTMLInputElement>}
	 */
	const handleChange = ({ target: { name, value } }) => {
		setState((current) => ({ ...current, [name]: value }))
	}

	const reset = () => {
		setState(initialState)
	}

	return { state, setState, handleChange, reset }
}
