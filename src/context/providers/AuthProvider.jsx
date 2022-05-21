import { createContext, useContext, useEffect, useReducer } from 'react'
import { authReducer, INITIAL_AUTH_STATE } from '../reducers/authReducer'
import * as authService from '../../services/authService'

const AuthContext = createContext({
	...INITIAL_AUTH_STATE,
	/**
	 * @param {import('../../types/Auth').Auth} auth
	 */
	setAuth(auth) {},
	reset() {},
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

	const reset = () => {
		dispatchAuth({ action: 'reset' })
	}

	return <AuthContext.Provider value={{ ...auth, setAuth, reset }}>{children}</AuthContext.Provider>
}
