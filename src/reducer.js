import {
	SET_USER,
	NEXT_STEP,
	PREVIOUS_STEP,
	CHECK_INPUTS,
	SET_PLAN,
	MONTH_YEAR_BTN,
	CHECK_PLAN,
	SET_ADDON,
} from './actions'

export const emailRegex =
	/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

export const defaultState = {
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
		stepOne: false,
		stepTwo: false,
		stepThree: true,
		stepFour: false,
	},
	planBtn: false,
	planBorder: false,
	monthly: {
		0: '$9/mo',
		1: '$12/mo',
		2: '$15/mo',
	},
	yearly: {
		0: '$90/yr',
		1: '$120/yr',
		2: '$150/yr',
	},
	periodTime: 'Monthly',
	addons: {
		active: {
			0: false,
			1: false,
			2: false
		},
		monthly: {
			0: '$1/mo',
			1: '$2/mo',
			2: '$2/mo',
		},
		yearly: {
			0: '$10/yr',
			1: '$20/yr',
			2: '$20/yr',
		},
	},
}

export const reducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: {
					...state.user,
					[action.payload.name]: action.payload.value,
				},
			}
		case CHECK_INPUTS:
			return {
				...state,
				error: action.payload?.error || state.error,
				emailError: action.payload?.emailError || state.emailError,
			}
		case NEXT_STEP:
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
		case PREVIOUS_STEP:
			const prevKeys = Object.keys(state.steps)
			const prevCurrentIndex = prevKeys.findIndex(key => state.steps[key])

			if (prevCurrentIndex > 0) {
				const newIndex = prevCurrentIndex - 1
				const oldSteps = prevKeys.reduce((nextKey, key, index) => {
					nextKey[key] = index === newIndex
					return nextKey
				}, {})

				if (oldSteps.stepOne && state.user.email) {
					if (!emailRegex.test(state.user.email)) {
						setEmailError('Email is invalid.')
					}
				}

				return {
					...state,
					steps: oldSteps,
				}
			}
			return state
		case SET_PLAN:
			return {
				...state,
				plan: {
					name: action.payload.currentPlan.title,
					price: action.payload.currentPrice.price,
				},
			}
		case MONTH_YEAR_BTN:
			const newPeriodTime = state.planBtn ? 'Monthly' : 'Yearly'

			return {
				...state,
				plan: {
					name: '',
					price: '',
				},
				planBtn: !state.planBtn,
				periodTime: newPeriodTime,
			}
		case CHECK_PLAN:
			return {
				...state,
				planBorder: actualBorderPlan,
			}
			case SET_ADDON:
				return {
					...state,
					addons: {
						...state.addons,
						active: {
							...state.addons.active,
							[action.payload]: !state.addons.active[action.payload],
						},
					},
				}
		default:
			return state
	}
}
