import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/providers/AuthProvider'
import ROUTES from '../../routes/helper'
import JobCollection from './JobCollection'
import styles from './HomePage.module.css'
import Input from '../../components/Input'
import { useJobCollection } from './hooks'
import Spinner from '../../components/Spinner'

export default function HomePage() {
	const { logged, token } = useAuth()

	if (!logged) {
		return <Navigate to={ROUTES.authRoute} replace />
	}

	const { filter, handleFilter, jobs, isLoading } = useJobCollection(token)

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h2>Trabajos</h2>
				<form>
					<Input
						id='filter'
						placeholder='Buscar trabajo por título o categoría'
						onChange={handleFilter}
						value={filter}
						fill
					/>
				</form>
			</header>
			<main className={styles.grid}>
				<JobCollection jobs={jobs} />
				<Outlet />
			</main>
		</div>
	)
}
