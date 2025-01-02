import {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect, useReducer
} from 'react'

import { reducer, INITIAL_STATE } from './reducer'
import { SET_USER } from './actions'


const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
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

	const [user, setUser] = useState({
		name: '',
		email: '',
		phone: '',
	})

	const [emailError, setEmailError] = useState('This field is required.')

	const [plan, setPlan] = useState({
		name: '',
		price: '',
	})

	const [error, setError] = useState([])

	const handleUser = (e, index) => {
		if (inputRef.current[index]) {
			inputRef.current[index].focus()
		}

		dispatch({
			type: SET_USER,
			payload: { name: e.target.name, value: e.target.value },
		})
		// setUser({ ...user, [e.target.name]: e.target.value })
	}

	const checkInputs = () => {

		

		// if (state.user.name === '') newError[0] = true
		// if (state.user.email === '') {
		// 	newError[1] = true
		
		// } else if (!emailRegex.test(state.user.email)) {
		// 	newError[1] = true
		// }
		// if (state.user.phone === '') newError[2] = true
		dispatch({type: 'CHECK_INPUTS'})
		return !state.error.includes(true)
		// const newError = [false, false, false]

		// let localEmailError

		// if (user.name === '') newError[0] = true
		// if (user.email === '') {
		// 	newError[1] = true
		// 	localEmailError = 'This field is required.'
		// } else if (!emailRegex.test(user.email)) {
		// 	newError[1] = true
		// 	localEmailError = 'Email is invalid.'
		// }
		// if (user.phone === '') newError[2] = true
		// setEmailError(localEmailError)
		// setError(newError)
		// return !newError.includes(true)
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
		setSteps(prevSteps => {
			const stepKeys = Object.keys(prevSteps)
			const currentIndex = stepKeys.findIndex(key => prevSteps[key])

			if (currentIndex < stepKeys.length - 1) {
				const newIndex = currentIndex + 1
				return stepKeys.reduce((nextKey, key, index) => {
					nextKey[key] = index === newIndex
					return nextKey
				}, {})
			}
			return prevSteps
		})
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
		// if (steps.stepOne && checkInputs()) {
		// 	handleNextSteps()
		// }
		// if (steps.stepTwo && plan.name) {
		// 	handleNextSteps()
		// }
		checkInputs()
		
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
				user,
				setUser,
				inputRef,
				error,
				emailError,
				handlePreviousClick,
				plan,
				handlePlanEnter,
				state
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
