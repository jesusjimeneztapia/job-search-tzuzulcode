import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/providers/AuthProvider'
import { useToast } from '../../context/providers/ToastProvider'
import * as jobService from '../../services/jobService'

/**
 *
 * @param {import('../../types/DataFetching').Token} token
 * @returns {{isLoading: boolean, jobs: import('../../types/Job').Job[], filter: string, handleFilter: Function}}
 */
export function useJobCollection(token) {
	const { showToast } = useToast()
	const [state, setState] = useState({ isLoading: true, jobs: [], filter: '', filterJobs: [] })

	useEffect(() => {
		const getAllJobs = async () => {
			const response = await jobService.getAllJobs(token)
			if (!response.error && !response.message) {
				return setState({ isLoading: false, jobs: response, filter: '', filterJobs: response })
			}
			showToast({ color: 'warning', message: response.message })
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
			const filterJobs = jobs.filter(({ title, categories }) => {
				const search = filter
					.toLowerCase()
					.split('')
					.map((letter) => `(${letter}(.)*)`)
					.join('')
				const regExp = new RegExp(search)
				let result = regExp.test(title.toLowerCase())
				for (let i = 0; i < categories.length && !result; i++) {
					result = regExp.test(categories[i].toLowerCase())
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

/**
 * @returns {{isLoading: boolean, job?: import('../../types/Job').Job, handleApply: () => Promise<void>}}
 */
export function useJobDetails() {
	const { showToast } = useToast()
	const { id } = useParams()
	const { token } = useAuth()
	const [state, setState] = useState({ isLoading: true })

	useEffect(() => {
		const getJobById = async () => {
			setState({ isLoading: true })
			const response = await jobService.getJobById({ token, jobId: id })
			if (!response.error && !response.message) {
				return setState({ isLoading: false, job: response })
			}
			setState({ isLoading: false })
		}
		if (id && token) {
			getJobById()
		}
	}, [id, token])

	const handleApply = async () => {
		const { job } = state
		await showToast(
			{ color: 'success', message: `Aplicó con éxito al trabajo ${job.title}` },
			async () => {
				return await jobService.applyToJob({ token, jobId: id })
			}
		)
	}

	return { ...state, handleApply }
}
