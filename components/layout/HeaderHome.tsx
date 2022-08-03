import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getFormatRoute } from '../../utils/formats'
import AsideBurger from './AsideBurger'
export default function HeaderHome () {
  const { pathname } = useRouter()
  return (
        <header className="sticky z-40 2xl:text-2xl bg-gray-100 top-0 left-0 right-0 p-4 grid grid-cols-4" >
            <span className="col-span-2 md:col-span-1 w-40 2xl:w-48 h-auto flex">
                <Image loading='lazy' width={300} height={105} src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt='logo senergy' />
            </span>
            <AsideBurger/>
            <nav className="col-span-2 hidden md:flex justify-around items-center" >
                <Link href="/">
                <a className={`font-bold text-gray-400  after:bg-yellow-500 after:-bottom-1 after:h-1 after:w-full relative after:absolute ${getFormatRoute(pathname) === '' ? 'text-yellow-500 after:block ' : 'after:hidden'}`}>
                    Inicio
                </a>
                </Link>
                <Link href="/about">
                <a className={`font-bold text-gray-400  after:bg-yellow-500 after:-bottom-1 after:h-1 after:w-full relative after:absolute ${getFormatRoute(pathname) === 'about' ? 'text-yellow-500 after:block ' : 'after:hidden'}`}>
                    Acerca de nosotros
                </a>
                </Link>
                <Link href="/pricing">
                <a className={`font-bold text-gray-400  after:bg-yellow-500 after:-bottom-1 after:h-1 after:w-full relative after:absolute ${getFormatRoute(pathname) === 'pricing' ? 'text-yellow-500 after:block ' : 'after:hidden'}`}>
                    Precios
                </a>
                </Link>
            </nav>
            <article aria-label="auth-links-desktop" className="md:flex hidden  justify-around items-center">
                <Link href="/login" >
                <a className="font-bold text-gray-500 rounded-xl border-2 border-gray-500 py-2 px-4">
                    Iniciar Sesión
                </a>
                </Link>
                <Link href="/register">
                <a className="bg-yellow-500 rounded-full 2xl:py-3 2xl:px-6 py-2 px-4 font-bold text-white" >
                    Registrarse
                </a>
                </Link>
            </article>
        </header>
  )
}
