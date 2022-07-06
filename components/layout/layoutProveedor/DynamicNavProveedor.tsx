import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { useTemplate } from '../../../stateManagement/contexts/HandleTemplateContext'
import { getFormatRoute } from '../../../utils'
export default function DynamicNavProveedor () {
  const { template } = useTemplate()
  const { pathname } = useRouter()
  return (
        <aside className={`z-0 hidden md:block sticky dark:bg-gray-800 top-0 bottom-0 h-screen transition-all duration-500 ${template.dynamicNavState ? ' w-72 p-2' : ' w-0 overflow-hidden'}`} >
            <div className="relative " >
                {getFormatRoute(pathname) === 'licitaciones' || getFormatRoute(pathname) === 'historialOfertas' || getFormatRoute(pathname) === 'licitacionesGuardadas'
                  ? <LicitacionNav/>
                  : <DashboardNav/>
            }
            </div>
        </aside>
  )
}
function LicitacionNav () {
  const [show, setShow] = useState({})
  const { pathname, push }:NextRouter = useRouter()
  useEffect(() => {
    if (getFormatRoute(pathname) === 'licitaciones') setShow({ ...show, licitaciones: true })
  }, [])
  console.log(show)
  return (
        <div className="right-2 absolute " >
            <div className="flex justify-center" >
                <h1 className="text-2xl text-gray-400" >Buscador</h1>
            </div>
            <ul className="flex flex-col mt-8 w-60">
                <li className="mb-2  ">
                    <div onClick={() => push('/empresaAccount/licitaciones')} className="flex justify-between cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 dark:group-hover:text-white group-hover:text-gray-900 ${getFormatRoute(pathname) === 'licitaciones' && 'text-yellow-500 font-bold'}`} >Ver licitaciones disponibles</h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname) === 'licitaciones' && 'rotate-90 text-yellow-500 '}`}>

                            <IoIosArrowForward/>

                        </span>
                    </div>

                </li>

                <li className="mb-2">
                    <div onClick={() => push('/empresaAccount/licitaciones/historialOfertas')} className="flex justify-between cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 dark:group-hover:text-white group-hover:text-gray-900 ${getFormatRoute(pathname) === 'historialOfertas' && 'text-yellow-500 font-bold'}`} >
                            Historial de Ofertas
                        </h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname) === 'historialOfertas' && ' text-yellow-500 rotate-90'}`}>
                            <IoIosArrowForward/>
                        </span>
                    </div>
                </li>

            </ul>
        </div>
  )
}
function DashboardNav () {
  const [show, setShow] = useState({
    licitaciones: false
  })
  const { pathname }:NextRouter = useRouter()
  useEffect(() => {
    if (pathname.split('/').pop() === 'userAccount' || pathname.split('/').pop() === 'dashboard') setShow({ ...show, licitaciones: true })
  }, [])
  console.log(show)
  return (
        <div className="right-2 absolute " >
            <div className="flex justify-center" >
                <h1 className="text-2xl text-gray-400" >Dashboards</h1>
            </div>
            <ul className="flex flex-col mt-8 w-60">
                <li className="mb-2  ">
                    <div onClick={() => show.licitaciones ? setShow({ ...show, licitaciones: false }) : setShow({ ...show, licitaciones: true })} className="flex justify-between  cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 dark:group-hover:text-white group-hover:text-gray-900 ${show.licitaciones && 'text-gray-900 dark:text-white font-bold'}`} >Licitaciones</h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${show.licitaciones && 'rotate-90'}`}>

                            <IoIosArrowForward/>

                        </span>
                    </div>
                    <ul className={`overflow-hidden transition-all duration-500 ${show.licitaciones ? 'my-4 h-auto' : 'h-0'}`}>
                        <li >
                            <Link href="/empresaAccount/dashboard">
                            <a className={` flex mb-2 pl-4 py-2  ${getFormatRoute(pathname) === 'dashboard' ? 'text-yellow-500' : 'text-gray-400 dark:hover:text-white hover:text-gray-900'} `} >
                            <span className="flex justify-center items-center mr-2">
                                <HiOutlineDocumentText/>
                            </span>
                            <h3>Licitaciones actuales</h3>
                            </a>
                            </Link>
                        </li>

                    </ul>
                </li>

            </ul>
        </div>
  )
}
