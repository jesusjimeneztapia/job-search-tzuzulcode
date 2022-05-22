/**
 * @param {import('react').SVGAttributes<SVGAElement>} props
 */
export default function ExitIcon({ ...props }) {
	return (
		<svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873l6-1.8ZM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1Zm6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1ZM9 11a1 1 0 1 0 0 2h.001a1 1 0 0 0 0-2H9Z'
				fill='#fafafa'
			/>
			<path
				d='m21 12-2 2m-3-2h5-5Zm5 0-2-2 2 2Z'
				stroke='#fafafa'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
