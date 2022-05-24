import styles from '../styles/Applicant.module.css'

/**
 * @param {import('../types/Job').JobUser}
 */
export default function Aplicant({ name, email, birthday }) {
	return (
		<li className={styles.applicant}>
			<p>{name}</p>
			<p>
				<strong>Correo electrónico:</strong>
				{email}
			</p>
			<small>
				Se unió el{' '}
				{new Date(birthday).toLocaleString('es', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</small>
		</li>
	)
}
