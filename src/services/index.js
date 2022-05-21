import { API_URL } from '../config/environment'

/**
 * @param {import('../types/DataFetching').PathURL} url
 * @param {import('../types/DataFetching').DataFetchingConfig} config
 */
export async function dataFetching(url, { body, method = 'GET', token }) {
	const baseURL = `${API_URL}${url}`

	let headers = {
		Accept: 'application/json',
	}
	if (body) {
		headers = { ...headers, body: JSON.stringify(body) }
	}
	if (token) {
		headers = { ...headers, Authorization: `Bearer ${token}` }
	}

	try {
		const response = await fetch(baseURL, {
			method,
			headers,
			body,
			redirect: 'follow',
		})
		return await response.json()
	} catch (error) {
		return error
	}
}
