import Toast from './components/Toast'
import AuthProvider from './context/providers/AuthProvider'
import ToastProvider from './context/providers/ToastProvider'
import AppRouter from './routes/AppRouter'

export default function App() {
	return (
		<ToastProvider>
			<Toast />
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</ToastProvider>
	)
}
