import { useNavigate } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import AuthButton from './AuthButton'
import ROUTES from '../routes/helper'
import { useAuth } from '../context/providers/AuthProvider'

export default function Header() {
	const navigate = useNavigate()
	const { logged, user } = useAuth()

	return (
		<header className={styles.header}>
			<span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.homeRoute)}>
				Logo
			</span>
			<nav>{logged ? <p>{user.name}</p> : <AuthButton />}</nav>
		</header>
	)
}
