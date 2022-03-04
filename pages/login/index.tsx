import Link from "next/link";
import { useRouter } from "next/router";
import LayoutHome from "../../components/layout";

export default function LoginUser():JSX.Element{
    const {push}=useRouter();
    const loginUser=(e:any):void=>{
        e.preventDefault();
        push("/userAccount");
    }
    return(
        <LayoutHome>

        <section className="flex min-h-screen p-4 justify-center items-center md:justify-around ">
            <span className=" hidden md:flex ">
                <img className=" w-64 2xl:w-[40rem] h-auto" src="https://cdn.pixabay.com/photo/2018/03/21/06/30/people-3245739__480.png" alt="login user"/>
            </span>
            <form onSubmit={loginUser} className=" 2xl:p-12 2xl:text-2xl p-8 flex flex-col justify-around rounded-lg shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.2)]" >
                <h1 className="font-bold text-3xl 2xl:text-4xl">Inicio de sesión de usuarios</h1>
                <hr/>
                <article className="flex my-4 flex-col">
                <label className="font-bold" htmlFor="email">Correo</label>
                <input name="email" type="email"/>
                </article>
                <article className="flex my-4 flex-col">
                <label className="font-bold" htmlFor="password">Contraseña</label>
                <input name="password" type="password"/>
                </article>
                <button className="bg-blue-500 mb-4 text-white font-bold py-2 rounded-md" type="submit" >Iniciar sesión</button>
                <article className="flex justify-center ">

                <Link href="/login/empresa">
                <a className="text-blue-400">
                    Si posees una cuenta de proveedor inicia sesión aquí!
                </a>
                </Link>
                </article>
                <hr className="bg-gray-300 my-4"/>
                <article className="flex justify-center">
                <Link href="/register">
                    <a className="text-blue-400">
                        ¿Aún no estás registrado? Ingresa aquí!
                    </a>
                </Link>
                </article>
            </form>
        </section>
        </LayoutHome>
    )
}