import { dataFetching } from '.'

const JOB_URL = '/jobs'

/**
 * @param {import('../types/DataFetching').Token} token
 * @returns {Promise<import('../types/Job').JobCollectionResponse>}
 */
export async function getAllJobs(token) {
	const response = await dataFetching(JOB_URL, { token })
	if (response.error || response.message) {
		return response
	}
	return response.map(({ __v, _id, ...rest }) => ({ id: _id, ...rest }))
}
