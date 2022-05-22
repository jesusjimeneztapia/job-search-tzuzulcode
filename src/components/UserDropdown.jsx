import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/UserDropdown.module.css'
import ArrowDownIcon from './icons/ArrowDownIcon'
import ExitIcon from './icons/ExitIcon'
import UserIcon from './icons/UserIcon'

export default function UserDropdown({ name, logout }) {
	const [show, setShow] = useState(false)

	const toggleShow = () => {
		setShow((value) => !value)
	}

	return (
		<div onClick={toggleShow} className={styles.dropdown}>
			<button className={show && styles.rotate}>
				{name}
				<ArrowDownIcon />
			</button>
			{show && (
				<ul className={styles.collapse}>
					<li>
						<Link to='/perfil'>
							<a>
								<UserIcon />
								Perfil
							</a>
						</Link>
					</li>
					<span className={styles.divider} />
					<li onClick={logout}>
						<ExitIcon />
						Cerrar Sesión
					</li>
				</ul>
			)}
		</div>
	)
}
