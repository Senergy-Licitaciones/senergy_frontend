import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react'
import { ValueTemplateProvider } from '../../types/stateManagement/handleTemplate'
import { handleTemplateReducer, initialTemplateState } from '../reducers/handleTemplateReducer'

const HandleTemplateContext = createContext<ValueTemplateProvider>({ template: { dynamicNavState: false } })
type Props = {
  children?: ReactNode
}

export const HandleTemplateProvider = ({ children }:Props) => {
  const [template, dispatch] = useReducer(handleTemplateReducer, initialTemplateState)
  useEffect(() => {
    localStorage.getItem('theme') && document.documentElement.classList.add('dark')
  }, [])
  const toggleDynamicNav = ():void => {
    dispatch({ type: 'TOGGLE_DYNAMIC_NAV' })
  }
  const toggleTheme = ():void => {
    if (localStorage.getItem('theme')) {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  const value:ValueTemplateProvider = { template, toggleDynamicNav, toggleTheme }
  return (
        <HandleTemplateContext.Provider value={value} >
            {children}
        </HandleTemplateContext.Provider>
  )
}
export const useTemplate = () => {
  const value = useContext(HandleTemplateContext)
  return value
}
