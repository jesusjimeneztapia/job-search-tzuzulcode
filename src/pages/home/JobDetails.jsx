import { useLocation } from 'react-router-dom'
import Aplicant from '../../components/Aplicant'
import Button from '../../components/Button'
import styles from './HomePage.module.css'

function getDays(creationDate) {
	const now = new Date()
	creationDate = new Date(creationDate)

	const difference = now - creationDate
	let days = difference / (1000 * 3600 * 24)
	days = Math.floor(days)
	return days < 1 ? 'Hoy' : `Hace ${days} día${days > 1 ? 's' : ''}`
}

export default function JobDetails() {
	/**
	 * @type {{state: import('../../types/Job').Job}}
	 */
	const {
		state: {
			applicants,
			category,
			creationDate,
			description,
			employer,
			location,
			salary,
			state,
			title,
		},
	} = useLocation()

	return (
		<div className={styles.details}>
			<header className={styles.header}>
				<h3>{title}</h3>
				<p>
					{employer?.name} • {location?.province}, {location?.country}
				</p>
				<small>
					{getDays(creationDate)} • {applicants?.length} aplicantes
				</small>
				<Button variant='primary'>Aplicar ahora</Button>
			</header>
			<div className={styles.body}>
				<p>
					El <strong>{employer?.role}</strong> {employer?.name}, que se unió el{' '}
					{new Date(employer?.birthday).toLocaleString('es', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
					, ofrece el trabajo de <strong>{title}</strong>, la misma se localiza en{' '}
					<strong>{location?.province}</strong>, <strong>{location?.country}</strong>.
				</p>
				<section>
					<h4>Descripción:</h4>
					<p>{description}</p>
				</section>
				<section>
					<h4>Aplicantes:</h4>
					<ul>
						{applicants?.map(({ id, ...rest }) => (
							<Aplicant key={id} {...rest} />
						))}
					</ul>
				</section>
				<Button variant='primary'>Aplicar ahora</Button>
			</div>
			<footer className={styles.footer}>
				<section>
					<h4>${salary}</h4>
					<p>Salario</p>
				</section>
				<section>
					<h4>{category?.join(' • ')}</h4>
					<p>Categorías</p>
				</section>
				<section>
					<h4>{state ? 'Activo' : 'Inactivo'}</h4>
					<p>Estado</p>
				</section>
				<section>
					<h4>{employer?.email}</h4>
					<p>Contacto</p>
				</section>
			</footer>
		</div>
	)
}
