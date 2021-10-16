export const signupValidation = (username: string = '', password: string, confirmPassword: string) => {
	if (username.length < 3) return 'username must be at least 3 letters'
	if (/$[A-Za-z]/.test(username)) return 'username must be letters only'

	if (password.length < 6) return 'password must be a must be at least 6 chracters'
	if (password !== confirmPassword) return 'confirm password must match password'
}

export const loginValidation = (username: string = '', password: string) => {
	if (username.length < 3) return 'username must be at least 3 letters'
	if (/$[A-Za-z]/.test(username)) return 'username must be letters only'

	if (password.length < 6) return 'password must be a must be at least 6 chracters'
}