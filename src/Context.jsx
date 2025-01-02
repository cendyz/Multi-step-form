import {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
	useReducer,
} from 'react'

import { reducer } from './reducer'
import { SET_USER, NEXT_STEP, CHECK_INPUTS } from './actions'

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

const INITIAL_STATE = {
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
const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
	const buttonRef = useRef([])
	const inputRef = useRef([])
	const [steps, setSteps] = useState({
		stepOne: true,
		stepTwo: false,
		stepThree: false,
		stepFour: false,
	})

	const [plan, setPlan] = useState({
		name: '',
		price: '',
	})

	const handleUser = (e, index) => {
		if (inputRef.current[index]) {
			inputRef.current[index].focus()
		}
		dispatch({
			type: SET_USER,
			payload: { name: e.target.name, value: e.target.value },
		})
	}

	const checkInputs = () => {
		const newError = [false, false, false]
		let localEmailError = 'This field is required.'

		if (state.user.name === '') newError[0] = true
		if (state.user.email === '') {
			newError[1] = true
		} else if (!emailRegex.test(state.user.email)) {
			newError[1] = true
			localEmailError = 'Email is invalid.'
		}
		if (state.user.phone === '') newError[2] = true

		dispatch({
			type: CHECK_INPUTS,
			payload: {
				error: newError,
				emailError: localEmailError,
			},
		})

		return !newError.includes(true)
	}

	const handlePlan = (currentPlan, currentPrice, index) => {
		const value = currentPlan.title
		const priceValue = currentPrice.price
		setPlan(prevPlan => ({
			...prevPlan,
			name: value,
			price: priceValue,
		}))
	}

	const handlePlanEnter = (e, currentPlan, currentPrice, index) => {
		if (e.key === 'Enter') {
			handlePlan(currentPlan, currentPrice, index)
		}
	}

	const handleNextSteps = () => {
		dispatch({ type: NEXT_STEP })
	}

	const handlePreviousSteps = () => {
		setSteps(prevSteps => {
			const stepKeys = Object.keys(prevSteps)
			const currentIndex = stepKeys.findIndex(key => prevSteps[key])

			if (currentIndex > 0) {
				const newIndex = currentIndex - 1
				const oldSteps = stepKeys.reduce((nextKey, key, index) => {
					nextKey[key] = index === newIndex
					return nextKey
				}, {})

				if (oldSteps.stepOne && user.email) {
					if (!emailRegex.test(user.email)) {
						setEmailError('Email is invalid.')
					}
				}

				return oldSteps
			}
			return prevSteps
		})
	}

	const handleNextClick = () => {
		if (state.steps.stepOne && checkInputs()) {
			handleNextSteps()
		}
		// if (steps.stepTwo && plan.name) {
		// 	handleNextSteps()
		// }
	}

	const handlePreviousClick = () => {
		handlePreviousSteps()
	}

	const handleSubmit = e => {
		console.log(e.target)
	}

	return (
		<GlobalContext.Provider
			value={{
				handleSubmit,
				steps,
				handleNextClick,
				handlePlan,
				buttonRef,
				handleUser,

				inputRef,

				handlePreviousClick,
				plan,
				handlePlanEnter,
				state,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
