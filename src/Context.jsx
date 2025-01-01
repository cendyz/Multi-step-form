import {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from 'react'

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
const GlobalContext = createContext()

const AppContext = ({ children }) => {
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

		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const checkInputs = () => {
		const newError = [false, false, false]

		let localEmailError

		if (user.name === '') newError[0] = true
		if (user.email === '') {
			newError[1] = true
			localEmailError = 'This field is required.'
		} else if (!emailRegex.test(user.email)) {
			newError[1] = true
			localEmailError = 'Email is invalid.'
		}
		if (user.phone === '') newError[2] = true
		setEmailError(localEmailError)
		setError(newError)
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

		if (buttonRef.current[index]) {
			buttonRef.current[index].focus()
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
		if (steps.stepOne && checkInputs()) {
			handleNextSteps()
		}
		if (steps.stepTwo && plan.name) {
			handleNextSteps()
		}
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
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
