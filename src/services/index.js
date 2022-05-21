import { API_URL } from '../config/environment'

/**
 * @param {import('../types/DataFetching').PathURL} url
 * @param {import('../types/DataFetching').DataFetchingConfig} config
 */
export async function dataFetching(url, { body, method = 'GET', token }) {
	const input = `${API_URL}${url}`

	let init = {
		method,
		headers: { Accept: 'application/json' },
		redirect: 'follow',
	}
	if (body) {
		const { headers } = init
		init = {
			...init,
			headers: { ...headers, 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}
	}
	if (token) {
		const { headers } = init
		init = { ...init, headers: { ...headers, Authorization: `Bearer ${token}` } }
	}

	try {
		const response = await fetch(input, init)
		return await response.json()
	} catch (error) {
		return error
	}
}
