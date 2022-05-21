import { ErrorResponse } from './ErrorResponse'

type Role = 'applicant' | 'employer'

interface User {
	email: string
	exp: number
	iat: number
	id: string
	name: string
	role: Role
}

interface Auth {
	logged: boolean
	user: User
}

export type AuthResponse = ErrorResponse | Auth
