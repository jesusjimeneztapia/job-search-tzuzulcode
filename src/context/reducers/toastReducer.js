import { TOAST_ACTIONS } from '../actions/toastAction'

/**
 * @type {import('../../types/Toast').Toast}
 */
export const INITIAL_TOAST_STATE = {
	show: false,
}

/**
 * @param {import('../../types/Toast').Toast} state
 * @param {import('../../types/Toast').ToastReducer} reducer
 */
export function toastReducer(state, { action, payload }) {
	const run = TOAST_ACTIONS[action]
	return run ? run(payload) : state
}
