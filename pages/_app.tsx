import { AppProps } from 'next/app'
import { SessionProvider } from '../config'
import { HandleTemplateProvider } from '../stateManagement/contexts/HandleTemplateContext'
import '../styles/globals.css'
export default function MyApp ({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session} >
        <HandleTemplateProvider>
            <Component {...pageProps} />
        </HandleTemplateProvider>
    </SessionProvider>

  )
}
