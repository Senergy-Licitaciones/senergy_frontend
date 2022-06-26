import { IoIosArrowForward } from 'react-icons/io'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTemplate } from '../../../stateManagement/contexts/HandleTemplateContext'
import { getFormatRoute } from '../../../utils'
import { ValueTemplateProvider } from '../../../types/stateManagement/handleTemplate'
export default function DynamicNav () {
  const { template }:ValueTemplateProvider = useTemplate()
  const { pathname } = useRouter()
  return (
        <aside className={`z-0 hidden md:block sticky dark:bg-gray-800 top-0 bottom-0 h-screen transition-all duration-500 ${template.dynamicNavState ? ' 2xl:w-96 w-72 p-2' : ' w-0 overflow-hidden'}`} >
            <div className="relative " >
                {getFormatRoute(pathname) === 'licitaciones' || getFormatRoute(pathname) === 'crearLicitacion' || getFormatRoute(pathname) === 'actualizarLicitacion'
                  ? <LicitacionNav/>
                  : <DashboardNav/>
            }

            </div>
        </aside>
  )
}
function LicitacionNav () {
  const [show, setShow] = useState({})
  const { pathname, push } = useRouter()
  useEffect(() => {
    if (pathname.split('/').pop() === 'licitaciones') setShow({ ...show, licitaciones: true })
  }, [])
  return (
        <div className="right-2 2xl:right-8 2xl:text-2xl absolute " >
            <div className="flex justify-center" >
                <h1 className="text-2xl 2xl:text-3xl text-gray-400" >Licitaciones</h1>
            </div>
            <ul className="flex flex-col mt-8 w-60 2xl:w-80">
                <li className="mb-2  ">
                    <div onClick={() => push('/userAccount/licitaciones')} className="flex justify-between  cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 dark:group-hover:text-gray-200 group-hover:text-gray-900 ${getFormatRoute(pathname) === 'licitaciones' && 'text-yellow-500 font-bold'}`} >Ver licitaciones actuales</h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname) === 'licitaciones' && 'rotate-90 text-yellow-500 '}`}>

                            <IoIosArrowForward/>

                        </span>
                    </div>

                </li>
                <li className="mb-2">
                    <div onClick={() => push('/userAccount/licitaciones/crearLicitacion')} className="flex justify-between cursor-pointer py-2 group">
                        <h2 className={` ${getFormatRoute(pathname) === 'crearLicitacion' ? 'text-yellow-500 font-bold' : 'text-gray-400 dark:group-hover:text-gray-200 group-hover:text-gray-900'}`} >
                            Crear licitación
                        </h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname) === 'crearLicitacion' && ' text-yellow-500 rotate-90'}`}>
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
    licitaciones: false,
    proveedores: false
  })
  const { pathname } = useRouter()
  useEffect(() => {
    if (pathname.split('/').pop() === 'userAccount' || pathname.split('/').pop() === 'dashboard') setShow({ ...show, licitaciones: true })
  }, [])
  console.log(show)
  return (
        <div className="right-2 2xl:right-8 2xl:text-2xl absolute " >
            <div className="flex justify-center" >
                <h1 className="text-2xl 2xl:text-3xl text-gray-400" >Dashboards</h1>
            </div>
            <ul className="flex flex-col mt-8 w-60 2xl:w-80 ">
                <li className="mb-2  ">
                    <div onClick={() => show.licitaciones ? setShow({ ...show, licitaciones: false }) : setShow({ ...show, licitaciones: true })} className="flex justify-between  cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 dark:group-hover:text-gray-200 group-hover:text-gray-900 ${show.licitaciones && 'text-gray-900 dark:text-white font-bold'}`} >Licitaciones</h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${show.licitaciones && 'rotate-90'}`}>

                            <IoIosArrowForward/>

                        </span>
                    </div>
                    <ul className={`overflow-hidden transition-all duration-500 ${show.licitaciones ? 'my-4 h-auto' : 'h-0'}`}>
                        <li >
                            <Link href="/userAccount">
                            <a className={` flex mb-2 pl-4 py-2  ${pathname.split('/').pop() === 'userAccount' ? 'text-yellow-500' : 'text-gray-400 dark:hover:text-white  hover:text-gray-900'} `} >
                            <span className="flex justify-center items-center mr-2">
                                <HiOutlineDocumentText/>
                            </span>
                            <h3>Licitaciones actuales</h3>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="mb-2">
                    <div onClick={() => show.proveedores ? setShow({ ...show, proveedores: false }) : setShow({ ...show, proveedores: true })} className="flex justify-between cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 dark:group-hover:text-gray-200 group-hover:text-gray-900 ${show.proveedores && 'text-gray-900 dark:text-white font-bold'}`} >
                            Proveedores
                        </h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${show.proveedores && 'rotate-90'}`}>
                            <IoIosArrowForward/>
                        </span>
                    </div>
                    <ul className={`overflow-hidden transition-all duration-500 ${show.proveedores ? 'my-4 h-auto' : 'h-0'}`}>
                        <li >
                            <Link href="/userAccount/dashboard/lista-proveedores">
                            <a className={` flex mb-2 pl-4 py-2  ${getFormatRoute(pathname) === 'lista-proveedores' ? 'text-yellow-500' : 'text-gray-400 dark:hover:text-gray-200  hover:text-gray-900'} `} >
                            <span className="flex justify-center items-center mr-2">
                                <HiOutlineDocumentText/>
                            </span>
                            <h3>Lista de proveedores</h3>
                            </a>
                            </Link>
                        </li>

                    </ul>
                </li>

            </ul>
        </div>
  )
}
