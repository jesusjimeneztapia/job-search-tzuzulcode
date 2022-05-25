type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning'

export interface Toast {
	show: boolean
	color?: Color
	message?: string
}

interface ToastPayload {
	color: Color
	message: string
}

type ToastActions = 'show' | 'reset'

export interface ToastReducer {
	action: ToastActions
	payload?: ToastPayload
}

export interface ToastOptions {
	show(payload: ToastPayload): Toast
	reset(): Toast
}
