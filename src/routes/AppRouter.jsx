import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import { AuthPage, HomePage, NotFoundPage, ProfilePage } from '../pages'
import { JobDetails } from '../pages/home'
import ROUTES from './helper'

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Header />
			<div style={{ padding: '16px' }}>
				<Routes>
					<Route path={ROUTES.homeRoute} element={<HomePage />}>
						<Route path={ROUTES.jobDetails()} element={<JobDetails />} />
					</Route>
					<Route path={ROUTES.authRoute} element={<AuthPage />} />
					<Route path={ROUTES.profileRoute} element={<ProfilePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
