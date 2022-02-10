import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderHome(){
    const {push}=useRouter();
    return(
        <header className="sticky bg-white top-0 left-0 right-0 p-4 grid grid-cols-4" >
            <span className="w-40 h-auto flex">
                <img src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
            </span>
            <nav className="col-span-2 flex justify-around items-center" >
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
            <article className="flex justify-around items-center">
                <button onClick={()=>push("/login")} className="font-bold text-gray-400" >Iniciar sesión</button>
                <button onClick={()=>push("/register")} className="bg-blue-500 rounded-full py-2 px-4 font-bold text-white" >Registrarse</button>
            </article>
        </header>
    )
}