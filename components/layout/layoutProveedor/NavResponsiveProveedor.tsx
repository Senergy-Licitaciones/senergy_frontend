import Link from 'next/link'
import { useRouter } from 'next/router'
import { getFormatRoute } from '../../../utils/formats'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons//fi'
import { BsSearch } from 'react-icons/bs'
import NavDynamicResponsiveProveedor from './NavDynamicResponsiveProveedor'
export default function NavResponsiveProveedor () {
  const { pathname } = useRouter()
  return (
        <div className="flex fixed top-16 right-0 left-0 bg-[rgba(0,0,0,0.5)] bottom-0 z-20">
            <aside className="flex  flex-col py-2 px-4   bg-gray-100 dark:bg-gray-900" >
                <ul className="flex flex-col flex-1 justify-around" >
                <li>
                    <Link href="/empresaAccount/dashboard" >
                        <a className={`text-2xl transition-all duration-300 hover:text-yellow-500 
                        ${getFormatRoute(pathname) === 'historialLicitaciones' || getFormatRoute(pathname) === 'dashboard' || getFormatRoute(pathname) === 'proveedoresFrecuentes' || getFormatRoute(pathname) === 'mejoresOfertas'
                        ? 'text-yellow-500'
 : 'text-gray-400 dark:text-white'} `} >
                            <IoAnalyticsOutline/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/empresaAccount/licitaciones" >
                        <a className={`text-2xl transition-all duration-300 hover:text-yellow-500 ${getFormatRoute(pathname) === 'licitaciones' || getFormatRoute(pathname) === 'licitacionesGuardadas' ? 'text-yellow-500' : 'text-gray-400 dark:text-white '} `} >
                            <BsSearch/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/empresaAccount" >
                        <a className={`text-2xl transition-all duration-300 hover:text-yellow-500 ${pathname.split('/').pop() === 'questions' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} >
                            <AiOutlineQuestionCircle/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/empresaAccount" >
                        <a className={`text-2xl transition-all duration-300 hover:text-yellow-500 ${pathname.split('/').pop() === 'settings' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} >
                            <FiSettings/>
                        </a>
                    </Link>
                </li>
            </ul>
            </aside>
            <NavDynamicResponsiveProveedor/>
        </div>
  )
}
