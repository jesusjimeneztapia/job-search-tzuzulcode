import { useState } from 'react'
import { useForm } from '../../components/Form'
import { useAuth } from '../../context/providers/AuthProvider'

/**
 * @type {import('../../types/Auth').LoginUserDTO}
 */
const LOGIN_USER_INITIAL_STATE = {
	email: '',
	password: '',
}

/**
 * @type {import('../../types/Auth').CreateUserDTO}
 */
const SIGN_UP_USER_INITIAL_STATE = {
	...LOGIN_USER_INITIAL_STATE,
	name: '',
	role: '',
}

/**
 * @typedef {{isLogin: boolean, handleChange: import('react').ChangeEventHandler<HTMLInputElement>, handleSubmit: Function, toggleLogin: Function, user: (import('../../types/Auth').LoginUserDTO|import('../../types/Auth').CreateUserDTO)}} AuthFormReturns
 */

/**
 * @returns {AuthFormReturns}
 */
export function useAuthForm() {
	const { login, signUp } = useAuth()
	const [isLogin, setIsLogin] = useState(true)
	const { handleChange, setState, state } = useForm(LOGIN_USER_INITIAL_STATE)

	const toggleLogin = () => {
		setIsLogin((isLogin) => {
			isLogin = !isLogin
			setState(() => (isLogin ? LOGIN_USER_INITIAL_STATE : SIGN_UP_USER_INITIAL_STATE))
			return isLogin
		})
	}

	const handleSubmit = async () => {
		return isLogin ? await login(state) : await signUp(state)
	}

	return { isLogin, handleChange, handleSubmit, toggleLogin, user: state }
}
