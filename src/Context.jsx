import { createContext, useContext } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	return (
		<GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
