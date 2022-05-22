import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/providers/AuthProvider'
import AuthForm from './AuthForm'
import styles from './AuthPage.module.css'
import ROUTES from '../../routes/helper'

export default function AuthPage() {
	const { logged } = useAuth()

	if (logged) {
		return <Navigate to={ROUTES.homeRoute} replace />
	}

	return (
		<div className={styles.form}>
			<h2 className={styles.title}>Autenticación</h2>
			<AuthForm />
		</div>
	)
}
