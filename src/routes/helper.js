export default {
	authRoute: '/auth',
	homeRoute: '/',
	profileRoute: '/profile',
	/**
	 * @type {(id?: number) => string} id
	 */
	jobDetails: (id) => (id ? `/${id}` : ':id'),
}
