import { useEffect, useState } from 'react'
import * as jobService from '../../services/jobService'

/**
 *
 * @param {import('../../types/DataFetching').Token} token
 * @returns {{isLoading: boolean, jobs: import('../../types/Job').Job[], filter: string, handleFilter: Function}}
 */
export function useJobCollection(token) {
	const [state, setState] = useState({ isLoading: true, jobs: [], filter: '', filterJobs: [] })

	useEffect(() => {
		const getAllJobs = async () => {
			const response = await jobService.getAllJobs(token)
			if (!response.error && !response.message) {
				setState({ isLoading: false, jobs: response, filter: '', filterJobs: response })
			}
			setState((value) => ({ ...value, isLoading: false }))
		}
		getAllJobs()
	}, [])

	useEffect(() => {
		const { filter } = state
		setState((value) => {
			const { jobs } = value
			if (!filter) {
				return { ...value, filterJobs: jobs }
			}
			const filterJobs = jobs.filter(({ title, category }) => {
				const search = filter
					.toLowerCase()
					.split('')
					.map((letter) => `(${letter}(.)*)`)
					.join('')
				const regExp = new RegExp(search)
				let result = regExp.test(title.toLowerCase())
				for (let i = 0; i < category.length && !result; i++) {
					result = regExp.test(category[i].toLowerCase())
				}
				return result
			})
			return { ...value, filterJobs }
		})
	}, [state.filter])

	/**
	 * @type {import('react').ChangeEventHandler<HTMLInputElement>}
	 */
	const handleFilter = ({ target: { value } }) => {
		setState((current) => ({ ...current, filter: value }))
	}

	return { isLoading: state.isLoading, jobs: state.filterJobs, filter: state.filter, handleFilter }
}
