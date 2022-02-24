import { AppProps } from "next/app";
import { HandleTemplateProvider } from "../stateManagement/contexts/HandleTemplateContext";
import "../styles/globals.css";
export default function MyApp({Component,pageProps:{...pageProps}}:AppProps){
    
    return(
        <HandleTemplateProvider>
            <Component {...pageProps} />
        </HandleTemplateProvider>
            
    )
}