import {
	createContext,
	useContext,
	useRef,
	useReducer,
	useEffect,
} from 'react'

import { defaultState, reducer } from './reducer'
import {
	SET_USER,
	NEXT_STEP,
	PREVIOUS_STEP,
	CHECK_INPUTS,
	SET_PLAN,
	MONTH_YEAR_BTN,
	CHECK_PLAN,
	SET_ADDON,
	SET_ADDON_ERROR,
	MODIFY_PLAN,
	ADD_PLAN,
	REMOVE_PLAN,
	CALCULATE_TOTAL,
} from './actions'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultState)
	const buttonRef = useRef([])
	const inputRef = useRef([])
	const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
	const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

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
		let localEmailError
		let localPhoneError

		if (state.user.name === '') newError[0] = true
		if (state.user.email === '') {
			newError[1] = true
		} else if (!emailRegex.test(state.user.email)) {
			newError[1] = true
			localEmailError = 'Email is invalid.'
		}
		if (state.user.phone === '') {
			newError[2] = true
		} else if (!phoneRegex.test(state.user.phone)) {
			newError[2] = true
			localPhoneError = 'Phone number is invalid'
		}

		dispatch({
			type: CHECK_INPUTS,
			payload: {
				error: newError,
				emailError: localEmailError,
				phoneError: localPhoneError,
			},
		})

		return !newError.includes(true)
	}

	const handlePlan = (currentPlan, index) => {
		let newPrice =
			state.periodTime === 'Monthly'
				? state.monthly[index]
				: state.yearly[index]

		dispatch({ type: SET_PLAN, payload: { currentPlan, newPrice } })
	}

	const handlePlanEnter = (e, currentPlan, index) => {
		if (e.key === 'Enter') {
			handlePlan(currentPlan, index)
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
		return actualBorderPlan
	}

	const checkAddonSelect = () => {
		const hasFalse = Object.values(state.addons.active).every(
			value => value === false
		)

		dispatch({
			type: SET_ADDON_ERROR,
			payload: hasFalse,
		})
		return hasFalse
	}

	const handleNextClick = () => {
		if (state.steps.stepOne && checkInputs()) {
			handleNextSteps()
		}
		if (state.steps.stepTwo && !checkPlanBorder()) {
			handleNextSteps()
		}
		if (state.steps.stepThree && !checkAddonSelect()) {
			handleNextSteps()
		}
		if (state.steps.stepFour) {
			handleNextSteps()
		}
	}

	const handlePreviousClick = () => {
		handlePreviousSteps()
	}

	const handleButtonPlan = () => {
		dispatch({ type: MONTH_YEAR_BTN })
	}

	const handleActiveAddon = (index, title, price) => {
		const existedItems = state.items.some(item => item.title === title)

		if (existedItems) {
			dispatch({ type: REMOVE_PLAN, payload: { title } })
		} else {
			dispatch({ type: ADD_PLAN, payload: { title, price } })
		}

		dispatch({ type: SET_ADDON, payload: index })
	}

	const handleChangePlan = () => {
		dispatch({ type: MODIFY_PLAN })
	}

	const handleCalculate = () => {
		const planCost = state.plan.price.replace(/[^0-9]/g, '')
		const numberPlanCost = parseFloat(planCost)
		let totalCost = 0
		let sum = 0

		state.items.forEach(item => {
			const newAddonsCost = item.price.replace(/[^0-9]/g, '')
			const newAddonsCostNumber = parseFloat(newAddonsCost)
			totalCost += newAddonsCostNumber
		})

		sum = totalCost + numberPlanCost
		dispatch({ type: CALCULATE_TOTAL, payload: sum })
	}

	useEffect(() => {
		handleCalculate()
	}, [state.plan.price, state.items])

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
				handleActiveAddon,
				handleChangePlan,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
