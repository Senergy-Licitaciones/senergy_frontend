import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {RiMenu4Line} from "react-icons/ri";
import {MdClose} from "react-icons/md";
export default function HeaderHome():JSX.Element{
    const {push}=useRouter();
    const [burger,setBurger]=useState(false);
    return(
        <header className="sticky  bg-white top-0 left-0 right-0 p-4 grid grid-cols-4" >
            <span className="col-span-2 md:col-span-1 w-40 h-auto flex">
                <img src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
            </span>
            <div className="col-span-2 flex md:hidden items-center justify-center">
            <button onClick={()=>setBurger(true)} className=" text-3xl" >
                <RiMenu4Line/>
            </button>
            <aside className={`fixed top-0 left-0 transition-all duration-300 ${burger?"translate-x-0":"-translate-x-full"}  min-h-screen w-screen bg-gray-700 flex items-center justify-between p-4 flex-col`} >
                <button onClick={()=>setBurger(false)} className="text-3xl text-gray-200" >
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
            <nav className="col-span-2 hidden md:flex justify-around items-center" >
                <Link href="/">
                <a className="font-bold text-gray-400">
                    Inicio
                </a>
                </Link>
                <Link href="/about">
                <a className="font-bold text-gray-400">
                    Acerca de nosotros
                </a>
                </Link>
                <Link href="/pricing">
                <a className="font-bold text-gray-400">
                    Precios
                </a>
                </Link>
            </nav>
            <article className="md:flex hidden  justify-around items-center">
                <button onClick={()=>push("/login")} className="font-bold text-gray-400" >Iniciar sesión</button>
                <button onClick={()=>push("/register")} className="bg-blue-500 rounded-full py-2 px-4 font-bold text-white" >Registrarse</button>
            </article>
        </header>
    )
}