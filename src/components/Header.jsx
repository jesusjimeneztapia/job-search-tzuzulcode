import { useNavigate } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import AuthButton from './AuthButton'
import ROUTES from '../routes/helper'
import { useAuth } from '../context/providers/AuthProvider'
import UserDropdown from './UserDropdown'

export default function Header() {
	const navigate = useNavigate()
	const { logged, user, logout } = useAuth()

	return (
		<header className={styles.header}>
			<span style={{ cursor: 'pointer' }} onClick={() => navigate(ROUTES.homeRoute)}>
				Logo
			</span>
			<nav>{logged ? <UserDropdown name={user?.name} logout={logout} /> : <AuthButton />}</nav>
		</header>
	)
}
