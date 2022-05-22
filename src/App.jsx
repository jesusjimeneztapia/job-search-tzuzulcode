import AuthProvider from './context/providers/AuthProvider'
import AppRouter from './routes/AppRouter'

export default function App() {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	)
}
