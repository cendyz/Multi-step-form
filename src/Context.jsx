import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [steps, setSteps] = useState({
		stepOne: true,
		stepTwo: false,
		stepThree: false,
		stepFour: false,
	})

	const [numbers, setNumbers] = useState({
		numTwo: false,
		numThree: false,
		numFour: false,
	})

	const handleSubmit = e => {
		console.log(e.target)
	}

	const handleNextSteps = () => {
		setSteps(prevSteps => {
			const stepKeys = Object.keys(prevSteps)
			const currentIndex = stepKeys.findIndex(key => prevSteps[key])

			if (currentIndex < stepKeys.length - 1) {
				const newIndex = currentIndex + 1
				return stepKeys.reduce((nextStep, key, index) => {
					nextStep[key] = index === newIndex
					return stepKeys
				}, {})
			}
			return prevSteps
		})
	}

	const handleNextNumbers = () => {
		setNumbers(prevNumbers => {
			const keys = Object.keys(prevNumbers)
			const nextIndex = keys.findIndex(key => !prevNumbers[key])
			if (nextIndex === -1) return prevNumbers

			const updatedNumbers = keys.reduce((newNumbers, key, index) => {
				newNumbers[key] = index === nextIndex ? true : prevNumbers[key]
				return newNumbers
			}, {})

			return updatedNumbers
		})
	}

	const handleNextClick = () => {
		handleNextSteps()
		handleNextNumbers()
	}

	return (
		<GlobalContext.Provider
			value={{ handleSubmit, steps, handleNextClick, numbers }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
