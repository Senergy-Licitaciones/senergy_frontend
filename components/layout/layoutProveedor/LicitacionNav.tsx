import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { getFormatRoute } from '../../../utils/formats'

export default function LicitacionNav () {
  const [show, setShow] = useState({
    licitaciones: false
  })
  const { pathname, push } = useRouter()
  useEffect(() => {
    if (getFormatRoute(pathname) === 'licitaciones') setShow({ licitaciones: true })
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
