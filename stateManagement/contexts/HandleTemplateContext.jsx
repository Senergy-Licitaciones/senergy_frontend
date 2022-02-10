import { createContext, useContext, useEffect, useReducer } from "react";
import { handleTemplateReducer, initialTemplateState } from "../reducers/handleTemplateReducer";

const HandleTemplateContext=createContext();

export const HandleTemplateProvider=({children})=>{
    const [template, dispatch] = useReducer(handleTemplateReducer, initialTemplateState);
    useEffect(()=>{
        localStorage.getItem("theme") && document.documentElement.classList.add("dark")
    },[]);
    const toggleDynamicNav=()=>{
        dispatch({type:"TOGGLE_DYNAMIC_NAV"})
    }
    const toggleTheme=()=>{
        if(localStorage.getItem("theme")){
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme");
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark")
        }
    }
    const value={template,toggleDynamicNav,toggleTheme}
    return(
        <HandleTemplateContext.Provider value={value} >
            {children}
        </HandleTemplateContext.Provider>
    )
}
export const useTemplate=()=>{
    const value=useContext(HandleTemplateContext);
    return value
}