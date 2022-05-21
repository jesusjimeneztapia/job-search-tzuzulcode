type Method = 'GET' | 'POST' | 'PUT'

export type PathURL = string
export type Token = string

export interface DataFetchingConfig {
	body?: object
	method?: Method
	token?: Token
}
