import { createContext, useContext, useEffect, useReducer } from 'react'
import { authReducer, INITIAL_AUTH_STATE } from '../reducers/authReducer'
import * as authService from '../../services/authService'

const AuthContext = createContext({
	...INITIAL_AUTH_STATE,
	/**
	 * @param {import('../../types/Auth').LoginUserDTO} user
	 */
	async login(user) {},
	/**
	 * @param {import('../../types/Auth').CreateUserDTO} user
	 */
	async signUp(user) {},
	/**
	 * @param {import('../../types/Auth').Auth} auth
	 */
	setAuth(auth) {},
	logout() {},
})

export function useAuth() {
	const { setAuth, reset, ...rest } = useContext(AuthContext)

	useEffect(() => {
		const validateToken = async (token) => {
			const response = await authService.validate(token)
			if (response.error) {
				localStorage.removeItem('token')
				return reset()
			}
			setAuth({ ...response, token })
		}
		const token = localStorage.getItem('token')
		if (token) {
			validateToken(token)
		}
	}, [])

	return { setAuth, ...rest }
}

export default function AuthProvider({ children }) {
	const [auth, dispatchAuth] = useReducer(authReducer, INITIAL_AUTH_STATE)

	/**
	 * @param {import('../../types/Auth').Auth} auth
	 */
	const setAuth = (auth) => {
		const { token } = auth
		if (token) {
			localStorage.setItem('token', token)
		}
		dispatchAuth({ action: 'setAuth', payload: auth })
	}

	/**
	 * @param {import('../../types/Auth').LoginUserDTO} user
	 */
	const login = async ({ email, password }) => {
		const response = await authService.login({ email, password })
		if (!response.error && !response.message) {
			setAuth({ ...response, logged: true })
		}
	}

	/**
	 * @param {import('../../types/Auth').CreateUserDTO} user
	 */
	const signUp = async (user) => {
		const response = await authService.signUp(user)
		if (!response.error && !response.message) {
			setAuth({ ...response, logged: true })
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		dispatchAuth({ action: 'reset' })
	}

	return (
		<AuthContext.Provider value={{ ...auth, setAuth, logout, login, signUp }}>
			{children}
		</AuthContext.Provider>
	)
}
