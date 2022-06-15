import Link from 'next/link'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { getFormatRoute } from '../../../utils'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import swal from 'sweetalert'
import { ErrorResponse, Response } from '../../../types/methods'
import { methodPutAuth } from '../../../utils/fetch'
import { signOut, useSession } from 'next-auth/react'
export default function StaticNavProveedor () {
  const { pathname } = useRouter()
  const [show, setShow] = useState(false)
  const { data: session } = useSession()
  const logout = async () => {
    swal({
      title: 'Cerrar Sesión',
      text: '¿Estás seguro que deseas cerrar la sesión?',
      buttons: ['Cancelar', true],
      icon: 'warning'
    }).then(async (willLogout) => {
      if (willLogout && session) {
        const data = await methodPutAuth('auth/logoutProveedor', session.accessToken, {}) as ErrorResponse|Response
        if ('error' in data) {
          console.log('error ', data)
          swal(data.message, data.error.toString(), 'error')
        } else {
          await signOut()
        }
      } else {
        await signOut()
      }
    })
  }
  return (
        <aside className="hidden md:flex sticky top-0 bottom-0 z-20 flex-col py-4 px-4 lg:px-8 h-screen bg-gray-100 dark:bg-gray-900">
            <div className=" " >
                <img className="w-8 h-auto" src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
            </div>
            <ul className="flex flex-col flex-1 justify-around" >
                <li>
                    <Link href="/empresaAccount/dashboard" >
                        <a className={`after:-left-1/2 relative after:hidden hover:after:block after:absolute after:text-xs  after:content-["Dashboard"] text-2xl transition-all duration-300 hover:text-yellow-500 
                        ${getFormatRoute(pathname) === 'historialLicitaciones' || getFormatRoute(pathname) === 'dashboard' || getFormatRoute(pathname) === 'proveedoresFrecuentes' || getFormatRoute(pathname) === 'mejoresOfertas'
                        ? 'text-yellow-500'
 : 'text-gray-400 dark:text-white'} `} >
                            <IoAnalyticsOutline/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/empresaAccount/licitaciones" >
                        <a className={`after:-left-1/2 relative after:hidden hover:after:block after:absolute after:text-xs  after:content-["Licitaciones"]  text-2xl transition-all duration-300 hover:text-yellow-500 ${getFormatRoute(pathname) === 'licitaciones' || getFormatRoute(pathname) === 'licitacionesGuardadas' ? 'text-yellow-500' : 'text-gray-400 dark:text-white '} `} >
                            <BsSearch/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/empresaAccount" >
                        <a className={`after:-left-1/2 relative after:hidden hover:after:block after:absolute after:text-xs  after:content-["Manuales"] text-2xl transition-all duration-300 hover:text-yellow-500 ${pathname.split('/').pop() === 'questions' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} >
                            <AiOutlineQuestionCircle/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/empresaAccount" >
                        <a className={`after:-left-1/2 relative after:hidden hover:after:block after:absolute after:text-xs  after:content-["Configuración"] text-2xl transition-all duration-300 hover:text-yellow-500 ${pathname.split('/').pop() === 'settings' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} >
                            <FiSettings/>
                        </a>
                    </Link>
                </li>
            </ul>
            <div className="relative " >
                <div className={`${show ? 'flex flex-col' : 'hidden'} w-64 shadow-2xl rounded absolute left-20 bottom-0 bg-white `}>
                    <article className="flex p-4 bg-gray-50">

                        <img className="w-16 h-16 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />

                        <div className="flex flex-col p-2 justify-center">
                            <p className="font-semibold" >{session ? session.user.name : 'Sesión cerrada'}</p>
                            <p className="text-xs font-semibold text-gray-400 uppercase" >Proveedor</p>
                        </div>
                    </article>
                    <div className="flex">
                        <ul className="divide-y w-full">
                            <li className="flex transition-all duration-300 items-center cursor-pointer hover:bg-gray-100">
                                <span className="flex items-center text-lg p-4">
                                    <AiOutlineUser/>
                                </span>
                                <article>
                                    <p className="text-sm font-semibold">Perfil</p>
                                    <p className="text-xs font-semibold text-gray-400">Ver tu perfil</p>
                                </article>
                            </li>
                            <li className="flex transition-all duration-300 items-center cursor-pointer hover:bg-gray-100">
                                <span className="flex items-center text-lg p-4">
                                    <FiSettings/>
                                </span>
                                <article>
                                    <p className="text-sm font-semibold">Configuraciones</p>
                                    <p className="text-xs font-semibold text-gray-400">Ajustes de tu cuenta</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <article className="flex justify-center py-4">
                        <button onClick={logout} className="py-2 transition-all duration-300 rounded px-4 bg-yellow-500 text-white hover:opacity-80">Cerrar sesión</button>
                    </article>
                </div>
                <img onClick={() => show ? setShow(false) : setShow(true)} className="cursor-pointer w-8 h-8 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />
            </div>
        </aside>
  )
}
