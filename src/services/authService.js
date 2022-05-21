import { dataFetching } from '.'

const AUTH_URL = '/auth'

/**
 * @param {{email: string, password: string}} body
 * @returns {Promise<import('../types/AuthResponse').AuthResponse>}
 */
export async function login(body) {
	return await dataFetching(`${AUTH_URL}/login`, { body, method: 'POST' })
}

/**
 * @param {{name: string, email: string, password: string, role: ('applicant'|'employer')}} body
 * @returns {Promise<import('../types/AuthResponse').AuthResponse>}
 */
export async function signUp(body) {
	return await dataFetching(`${AUTH_URL}/signup`, { body, method: 'POST' })
}

/**
 * @param {import('../types/DataFetching').Token} token
 * @returns {Promise<import('../types/AuthResponse').AuthResponse>}
 */
export async function validate(token) {
	return await dataFetching(`${AUTH_URL}/validate`, { method: 'POST', token })
}
