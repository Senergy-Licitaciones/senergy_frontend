import { useEffect } from "react";
import { HandleTemplateProvider } from "../stateManagement/contexts/HandleTemplateContext";
import "../styles/globals.css";
export default function MyApp({Component,pageProps:{...pageProps}}){
    
    return(
        <HandleTemplateProvider>
            <Component {...pageProps} />
        </HandleTemplateProvider>
            
    )
}