export const INITIAL_STATE = {
	user: {
		name: '',
		email: '',
		phone: '',
	},
	error: [false, false, false],
	emailError: 'This field is required.',
	plan: {
		name: '',
		price: '',
	},
	steps: {
		stepOne: true,
		stepTwo: false,
		stepThree: false,
		stepFour: false,
	},
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
			 return {
					...state,
					error: action.payload?.error || state.error,
					emailError: action.payload?.emailError || state.emailError,
				}
		case 'NEXT_STEP':
			const stepKeys = Object.keys(state.steps)
			const currentIndex = stepKeys.findIndex(key => state.steps[key])

			if (currentIndex < stepKeys.length - 1) {
				const newIndex = currentIndex + 1
				const newSteps = stepKeys.reduce((nextKey, key, index) => {
					nextKey[key] = index === newIndex
					return nextKey
				}, {})
				return {
					...state,
					steps: newSteps,
				}
			}
			return state

		default:
			return state
	}
}
