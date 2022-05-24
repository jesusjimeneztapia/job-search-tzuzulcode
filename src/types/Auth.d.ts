import { ErrorResponse } from './Error'

type Role = 'applicant' | 'employer'

export interface User {
	email: string
	exp: number
	iat: number
	id: string
	name: string
	role: Role
}

export interface Auth {
	logged: boolean
	user?: User
	token?: string
}

export type AuthResponse = ErrorResponse | Auth

type AuthActions = 'setAuth' | 'reset'

export interface AuthReducer {
	action: AuthActions
	payload?: Auth
}

export interface AuthOptions {
	setAuth(state: Auth, payload: Auth): Auth
	reset(): Auth
}

export interface LoginUserDTO {
	email: string
	password: string
}

export interface CreateUserDTO extends LoginUserDTO {
	name: string
	role: Role
}
