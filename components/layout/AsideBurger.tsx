import { useState } from 'react'
import { RiMenu4Line } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import Link from 'next/link'
export default function AsideBurger () {
  const [burger, setBurger] = useState<boolean>(false)
  return (
        <div className="col-span-2 flex md:hidden items-center justify-center">
            <button aria-label="burger-open" onClick={() => setBurger(true)} className=" text-3xl" >
                <RiMenu4Line/>
            </button>
            <aside role="group" className={`fixed top-0 left-0 transition-all duration-300 ${burger ? 'translate-x-0' : '-translate-x-full'}  min-h-screen w-screen bg-gray-700 flex items-center justify-between p-4 flex-col`} >
                <button aria-label="burger-close" onClick={() => setBurger(false)} className="text-3xl text-gray-200" >
                    <MdClose/>
                </button>
                <ul className="flex divide-y-2 flex-col text-gray-200 items-center" >
                    <li>
                        <Link href="/" >
                        <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                        <a>Acerca de nosotros</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" >
                        <a>Precios</a>
                        </Link>
                    </li>
                </ul>
                <article className="flex" >
                    <Link href="/login" >
                    <a className="py-2 px-4 rounded-lg text-gray-200 bg-blue-600" > Iniciar sesión </a>
                    </Link>
                    <Link href="/register" >
                    <a className="py-2 px-4 text-gray-200" > Registrarse </a>
                    </Link>
                </article>
            </aside>
            </div>
  )
}
