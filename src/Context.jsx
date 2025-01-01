import {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from 'react'

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
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

	const handleNextClick = () => {
		if (checkInputs()) {
		}
		handleNextSteps()
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
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
