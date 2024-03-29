import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { IoAnalyticsOutline, IoDocumentTextOutline } from 'react-icons/io5'
import swal from 'sweetalert'
import { getFormatRoute } from '../../../utils/formats'
import Loader from '../../common/Loader'
export default function StaticNav() {
  const { pathname } = useRouter()
  const [show, setShow] = useState(false)
  const { data: session } = useSession()
  if (!session) return <Loader />
  const logout = async () => {
    try {
      swal({
        title: 'Cerrar Sesión',
        text: '¿Está seguro de que desea cerrar la sesión?',
        icon: 'warning',
        buttons: ['Cancelar', true],
        dangerMode: true
      }).then(async (willLogout) => {
        if (willLogout) {
          // await logoutUser(session.accessToken)
          return await signOut()
        }
        return true
      })
    } catch (err) {
      console.log('error ', err)
    }
  }
  return (
    <aside className="hidden md:flex md:flex-col md:items-center shadow-xl shadow-gray-400 sticky top-0 bottom-0 z-20 flex-col 2xl:py-6 2xl:px-10 py-4 px-4 lg:px-6 h-screen bg-gray-100 dark:bg-gray-900">
      <div className="" >
        <Image loading="lazy" width={60} height={21} src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
      </div>
      <ul className="flex flex-col flex-1  justify-around" >
        <li>
          <Link className={` relative flex justify-center after:-left-1/2 after:hidden  after:top-full hover:after:block after:absolute after:text-xs  after:content-["Dashboard"] text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 
                        ${getFormatRoute(pathname) === 'userAccount' || getFormatRoute(pathname) === 'dashboard' || getFormatRoute(pathname) === 'proveedoresFrecuentes' || getFormatRoute(pathname) === 'mejoresOfertas'
              ? 'text-yellow-500'
              : 'text-gray-400 dark:text-white'} `} href="/userAccount" >

            <IoAnalyticsOutline />

          </Link>
        </li>
        <li>
          <Link className={`relative flex justify-center after:-left-1/2 after:top-full after:hidden hover:after:block after:absolute after:text-xs  after:content-["Licitaciones"] text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 ${pathname.split('/').pop() === 'licitaciones' || getFormatRoute(pathname) === 'crearLicitacion' || getFormatRoute(pathname) === 'actualizarLicitacion' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} href="/userAccount/licitaciones" >
            <IoDocumentTextOutline />

          </Link>
        </li>
        <li>
          <Link className={`relative flex justify-center after:-left-1/2 after:top-full after:hidden hover:after:block after:absolute after:text-xs  after:content-["Manuales"] text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 ${pathname.split('/').pop() === 'questions' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} href="/userAccount" >
            <AiOutlineQuestionCircle />

          </Link>
        </li>
        <li>
          <Link className={`text-2xl flex justify-center after:-left-full after:top-full relative after:hidden hover:after:block after:absolute after:text-xs  after:content-["Configuración"] 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 ${pathname.split('/').pop() === 'settings' ? 'text-yellow-500' : 'text-gray-400 dark:text-white'} `} href="/userAccount" >

            <FiSettings />

          </Link>
        </li>
      </ul>
      <div className="relative " >
        <div className={`${show ? 'flex flex-col' : 'hidden'} w-64 2xl:w-80 2xl:text-2xl shadow-2xl rounded absolute 2xl:left-24 2xl:p-6 left-20 bottom-0 bg-white `}>
          <article className="flex p-4 bg-gray-50">
            <figure className='rounded-full overflow-hidden flex ' >
              <Image loading='lazy' width={50} height={50} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="photo profile" />
            </figure>
            <div className="flex flex-col p-2 justify-center">
              <p className=" 2xl:text-2xl font-semibold" >{session ? session.user.name : 'Tiempo Agotado'}</p>
              <p className="text-xs 2xl:text-sm font-semibold text-gray-400 uppercase" >Usuario</p>
            </div>
          </article>
          <div className="flex">
            <ul className="divide-y w-full">
              <li className="flex transition-all 2xl:py-4 duration-300 items-center cursor-pointer hover:bg-gray-100">
                <span className="flex items-center 2xl:text-2xl text-lg p-4">
                  <AiOutlineUser />
                </span>
                <article>
                  <p className="text-sm 2xl:text-lg font-semibold">Perfil</p>
                  <p className="text-xs 2xl:text-base font-semibold text-gray-400">Ver tu perfil</p>
                </article>
              </li>
              <li className="flex transition-all 2xl:py-4 duration-300 items-center cursor-pointer hover:bg-gray-100">
                <span className="flex items-center 2xl:text-2xl text-lg p-4">
                  <FiSettings />
                </span>
                <article>
                  <p className="text-sm 2xl:text-lg font-semibold">Configuraciones</p>
                  <p className="text-xs 2xl:text-base font-semibold text-gray-400">Ajustes de tu cuenta</p>
                </article>
              </li>
            </ul>
          </div>
          <article className="flex justify-center py-4">
            <button onClick={logout} className="py-2 transition-all 2xl:text-xl duration-300 rounded px-4 bg-yellow-500 text-white hover:opacity-80">Cerrar sesión</button>
          </article>
        </div>
        <span onClick={() => show ? setShow(false) : setShow(true)} className='cursor-pointer overflow-hidden rounded-full flex' >
          <Image loading='lazy' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" width={35} height={35} alt='user profile photo' />
        </span>
      </div>
    </aside>
  )
}
