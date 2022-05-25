import { createContext, useContext, useEffect, useReducer } from 'react'
import { INITIAL_TOAST_STATE, toastReducer } from '../reducers/toastReducer'

const ToasContext = createContext({
	...INITIAL_TOAST_STATE,
	/**
	 * @type {(payload: import('../../types/Toast').ToastPayload, callback?: () => Promise) => Promise}
	 */
	async showToast(payload, callback) {},
	closeToast() {},
})

export function useToast() {
	const { show, closeToast, ...rest } = useContext(ToasContext)

	useEffect(() => {
		let timer
		if (show) {
			console.log('Show')
			timer = setTimeout(() => {
				closeToast()
			}, 5000)
		}
		return () => clearTimeout(timer)
	}, [show])

	return { show, closeToast, ...rest }
}

export default function ToastProvider({ children }) {
	const [toast, dispatchToast] = useReducer(toastReducer, INITIAL_TOAST_STATE)

	const showToast = async (payload, callback) => {
		if (callback) {
			const response = await callback()
			const { error, message } = response
			if (error || message) {
				dispatchToast({ action: 'show', payload: { color: 'danger', message } })
				return false
			}
			dispatchToast({ action: 'show', payload })
			return response
		}
		return dispatchToast({ action: 'show', payload })
	}

	const closeToast = () => {
		dispatchToast({ action: 'reset' })
	}

	return (
		<ToasContext.Provider value={{ ...toast, showToast, closeToast }}>
			{children}
		</ToasContext.Provider>
	)
}
