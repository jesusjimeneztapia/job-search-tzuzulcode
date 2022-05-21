import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage, HomePage, NotFoundPage } from '../pages'
import ROUTES from './helper'

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.homeRoute} element={<HomePage />} />
				<Route path={ROUTES.authRoute} element={<AuthPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}
