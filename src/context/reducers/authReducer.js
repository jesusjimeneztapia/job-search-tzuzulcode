import { AUTH_ACTIONS } from '../actions/authActions'

/**
 * @type {import('../../types/Auth').Auth}
 */
export const INITIAL_AUTH_STATE = {
	logged: !!localStorage.getItem('token'),
	token: localStorage.getItem('token'),
}

/**
 * @param {import('../../types/Auth').Auth} state
 * @param {import('../../types/Auth').AuthReducer} reducer
 */
export function authReducer(state, { action, payload }) {
	const run = AUTH_ACTIONS[action]
	return run ? run(state, payload) : state
}
