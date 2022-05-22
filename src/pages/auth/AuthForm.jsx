import Input from '../../components/Input'
import Form from '../../components/Form'
import Button from '../../components/Button'
import { useAuthForm } from './hooks'
import styles from './AuthPage.module.css'
import Select from '../../components/Select'

export default function AuthForm() {
	const { handleChange, handleSubmit, isLogin, user, toggleLogin } = useAuthForm()

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				id='email'
				label='Correo electrónico'
				placeholder='Ingrese su correo electrónico'
				type='email'
				onChange={handleChange}
				value={user.email}
				required
				fill
			/>
			<Input
				id='password'
				label='Contraseña'
				placeholder='Ingrese su contraseña'
				type='password'
				onChange={handleChange}
				value={user.password}
				required
				fill
			/>
			{!isLogin && (
				<>
					<Input
						id='name'
						label='Nombre'
						placeholder='Ingrese su nombre'
						onChange={handleChange}
						value={user.name}
						required
						fill
					/>
					<Select id='role' label='Rol' onChange={handleChange} value={user.role} required fill>
						<option value='' disabled>
							Seleccione un rol
						</option>
						<option value='applicant'>Solicitante</option>
						<option value='employer'>Empleador</option>
					</Select>
				</>
			)}
			<footer className={styles.footer}>
				<Button type='submit' variant={isLogin ? 'primary' : 'success'}>
					{isLogin ? 'Iniciar Sesión' : 'Registrarse'}
				</Button>
				<small>
					{isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
					<span data-signup={isLogin} onClick={toggleLogin}>
						{isLogin ? 'Regístrate' : 'Inicia Sesión'}
					</span>
				</small>
			</footer>
		</Form>
	)
}
