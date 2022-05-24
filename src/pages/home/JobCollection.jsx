import JobCard from '../../components/JobCard'
import styles from './HomePage.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import ROUTES from '../../routes/helper'
import { useEffect } from 'react'

/**
 *
 * @param {{jobs: import('../../types/Job').Job[]}} props
 */
export default function JobCollection({ jobs }) {
	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (!params.id) {
			const firstJob = jobs[0]
			if (firstJob)
				return navigate(ROUTES.jobDetails(firstJob.id), { replace: true, state: firstJob })
		}
	}, [params, jobs])

	/**
	 * @param {import('../../types/Job').Job} job
	 */
	const handleChange = ({ id, ...rest }) => {
		navigate(ROUTES.jobDetails(id), { replace: true, state: { id, ...rest } })
	}

	return (
		<form className={styles.collection}>
			{jobs.map(({ id, ...rest }) => (
				<JobCard key={id} id={id} value={params.id} handleChange={handleChange} {...rest} />
			))}
		</form>
	)
}
