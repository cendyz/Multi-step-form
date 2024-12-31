import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [steps, setSteps] = useState({
		stepOne: true,
		stepTwo: false,
		stepThree: false,
		stepFour: false,
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
				return stepKeys.reduce((nextKey, key, index) => {
					nextKey[key] = index === newIndex
					return nextKey
				}, {})
			}
			return prevSteps
		})
	}


	const handleNextClick = () => {
		handleNextSteps()
	}

	return (
		<GlobalContext.Provider
			value={{ handleSubmit, steps, handleNextClick}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
