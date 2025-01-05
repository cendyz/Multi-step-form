import { createContext, useContext, useRef, useReducer } from 'react'

import { defaultState, reducer, emailRegex } from './reducer'
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

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultState)
	const buttonRef = useRef([])
	const inputRef = useRef([])
	const addonRef = useRef([])

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

	const handlePlan = (currentPlan, currentPrice) => {
		dispatch({ type: SET_PLAN, payload: { currentPlan, currentPrice } })
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
		dispatch({ type: PREVIOUS_STEP })
	}

	const checkPlanBorder = () => {
		const actualBorderPlan = state.plan.name === '' ? true : false
		dispatch({
			type: CHECK_PLAN,
			payload: {
				planBorder: actualBorderPlan,
			},
		})
		return state.plan.name === ''
	}

	const handleNextClick = () => {
		// if (state.steps.stepOne && checkInputs()) {
		// 	handleNextSteps()
		// }
		// if (state.steps.stepTwo && state.plan.name && !checkPlanBorder()) {
		// 	handleNextSteps()
		// }

		console.log(state.plan.monthly[0])
	}

	const handlePreviousClick = () => {
		handlePreviousSteps()
	}

	const handleButtonPlan = () => {
		dispatch({ type: MONTH_YEAR_BTN })
	}

	const handleActiveAddon = (index) => {
		dispatch({ type: SET_ADDON, payload: index })
		if (addonRef.current[index]) {
			addonRef.current[index].focus()
		}
	}

	const handleSubmit = e => {
		console.log(e.target)
	}

	return (
		<GlobalContext.Provider
			value={{
				handleSubmit,
				handleNextClick,
				handlePlan,
				buttonRef,
				handleUser,
				inputRef,
				handlePreviousClick,
				handlePlanEnter,
				state,
				handleButtonPlan,
				handleActiveAddon, addonRef
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
