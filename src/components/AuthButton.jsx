import { useLocation, useNavigate } from 'react-router-dom'
import ROUTES from '../routes/helper'
import Button from './Button'

export default function AuthButton() {
	const { pathname } = useLocation()

	if (ROUTES.authRoute === pathname) {
		return <></>
	}

	const navigate = useNavigate()

	return <Button onClick={() => navigate(ROUTES.authRoute)}>Autentificarse</Button>
}
