import { User } from './Auth'
import { ErrorResponse } from './Error'

interface JobUser extends Omit<User, 'exp' | 'iat'> {
	birthday: string
}

interface Location {
	country: string
	province: string
}

interface Job {
	applicants: JobUser[]
	category: string[]
	creationDate: string
	description: string
	employer: JobUser
	location: Location
	salary: number
	state: boolean
	title: string
	id: string
}

export type JobCollectionResponse = ErrorResponse | Job[]
