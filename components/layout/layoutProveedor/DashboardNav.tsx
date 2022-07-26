import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { getFormatRoute } from '../../../utils/formats'

export default function DashboardNav () {
  const [show, setShow] = useState({
    licitaciones: false
  })
  const { pathname } = useRouter()
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
