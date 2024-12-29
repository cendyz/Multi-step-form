import { createContext, useContext } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {


	const handleSubmit = (e) => {
		console.log(e.target);
	}

	return (
		<GlobalContext.Provider value={{handleSubmit}}>{children}</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
