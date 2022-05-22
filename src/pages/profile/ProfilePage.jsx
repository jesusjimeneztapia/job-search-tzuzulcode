import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/providers/AuthProvider'
import ROUTES from '../../routes/helper'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {
	const { user } = useAuth()

	if (!user) {
		return <Navigate to={ROUTES.homeRoute} replace />
	}

	return (
		<article className={styles.profile}>
			<h2>Perfil</h2>
			<div className={styles.content}>
				<section>
					<h4>Nombre:</h4>
					<p>{user.name}</p>
				</section>
				<section>
					<h4>Correo electrónico:</h4>
					<p>{user.email}</p>
				</section>
				<section>
					<h4>Rol:</h4>
					<p>{user.role}</p>
				</section>
			</div>
		</article>
	)
}
