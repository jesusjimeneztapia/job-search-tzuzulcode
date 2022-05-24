import styles from '../styles/JobCard.module.css'

function getDays(creationDate) {
	const now = new Date()
	creationDate = new Date(creationDate)

	const difference = now - creationDate
	let days = difference / (1000 * 3600 * 24)
	days = Math.floor(days)
	return days < 1 ? 'Hoy' : `Hace ${days} día${days > 1 ? 's' : ''}`
}

function floorDescription(description) {
	if (description?.length < 158) {
		return description
	}
	return `${description?.slice(0, 158)}...`
}

/**
 * @param {import('../types/Job').Job}
 */
export default function JobCard({
	category,
	creationDate,
	description,
	employer,
	location,
	state,
	title,
	id,
	handleChange,
	value,
	...rest
}) {
	return (
		<div className={styles.card}>
			<input
				id={id}
				name='job'
				type='radio'
				value={id}
				onChange={() =>
					handleChange({
						category,
						creationDate,
						description,
						employer,
						location,
						state,
						title,
						id,
						...rest,
					})
				}
				checked={value === id}
			/>
			<label htmlFor={id}>
				<header className={styles.header}>
					<h4 className={styles.title}>{title}</h4>
					<p>{employer?.name}</p>
					<p>
						{location?.province}, {location?.country}
					</p>
				</header>
				<p className={styles.content}>{floorDescription(description)}</p>
				<footer className={styles.footer}>
					<section>
						<h4>Categorías</h4>
						<ul>
							{category?.map((c, index) => (
								<li key={index}>{c}</li>
							))}
						</ul>
					</section>
					<small>
						{getDays(creationDate)}
						<span data-state={state} />
					</small>
				</footer>
			</label>
		</div>
	)
}
