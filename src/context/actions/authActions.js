import { INITIAL_AUTH_STATE } from '../reducers/authReducer'

/**
 * @type {import('../../types/Auth').AuthOptions}
 */
export const AUTH_ACTIONS = {
	setAuth(state, payload) {
		return { ...state, ...payload }
	},
	reset() {
		return INITIAL_AUTH_STATE
	},
}
