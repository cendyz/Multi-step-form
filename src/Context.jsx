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

	return (
		<GlobalContext.Provider value={{ handleSubmit, steps }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
