import { INITIAL_TOAST_STATE } from '../reducers/toastReducer'

/**
 * @type {import('../../types/Toast').ToastOptions}
 */
export const TOAST_ACTIONS = {
	show(payload) {
		return { show: true, ...payload }
	},
	reset() {
		return INITIAL_TOAST_STATE
	},
}
