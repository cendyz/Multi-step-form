export const INITIAL_STATE = {
	user: {
		name: '',
		email: '',
		phone: '',
	},
	error: [false, false, false],
	emailError: 'This field is required.',
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: {
					...state.user,
					[action.payload.name]: action.payload.value,
				},
			}
		case 'CHECK_INPUTS':
			const newError = [false, false, false]
			let localEmailError = 'This field is required.'

			if (state.user.name === '') newError[0] = true
			if (state.user.email === '') {
				newError[1] = true
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.user.email)
			) {
				newError[1] = true
				localEmailError = 'Email is invalid.'
			}
			if (state.user.phone === '') newError[2] = true

			return {
				...state,
				error: newError,
				emailError: localEmailError,
			}
		default:
			return state
	}
}
