import { dataFetching } from '.'

const JOB_URL = '/jobs'

/**
 * @typedef {import('../types/DataFetching').Token} Token
 * @typedef {import('../types/Job').JobCollectionResponse} JobCollectionResponse
 * @typedef {import('../types/Job').JobResponse} JobResponse
 * @typedef {string} JobId
 */

/**
 * @param {Token} token
 * @returns {Promise<JobCollectionResponse>}
 */
export async function getAllJobs(token) {
	const response = await dataFetching(JOB_URL, { token })
	if (response.error || response.message) {
		return response
	}
	return response.map(({ __v, _id, category, ...rest }) => ({
		id: _id,
		categories: category,
		...rest,
	}))
}

/**
 * @param {{token: Token, jobId: JobId}} param
 * @returns {Promise<JobResponse>}
 */
export async function getJobById({ token, jobId }) {
	const response = await dataFetching(`${JOB_URL}/${jobId}`, { token })
	if (response.error || response.message) {
		return response
	}
	const { _id, category, ...rest } = response
	return { id: _id, categories: category, ...rest }
}

/**
 * @param {Token} token
 * @returns {Promise<JobCollectionResponse>}
 */
export async function getMyApplications(token) {
	return await dataFetching(`${JOB_URL}/me`, { method: 'POST', token })
}

/**
 * @param {{token: Token, jobId: JobId}} param
 * @returns {Promise<JobResponse>}
 */
export async function applyToJob({ token, jobId }) {
	return await dataFetching(`${JOB_URL}/apply/${jobId}`, { token, method: 'PUT' })
}
