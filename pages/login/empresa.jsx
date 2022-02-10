import Link from "next/link";
import LayoutHome from "../../components/layout";
import {useRouter} from "next/router";
export default function LoginEmpresa(){
    const {push}=useRouter();
    const login=(e)=>{
        e.preventDefault();
        push("/empresaAccount");
    }
    return(
        <LayoutHome>
            <section className="flex p-4 justify-around ">
            <span className="flex">
                <img src="https://media.istockphoto.com/vectors/flat-design-concept-of-meeting-business-presentation-training-annual-vector-id1162009708?k=20&m=1162009708&s=612x612&w=0&h=_ZoT-71l7RyDyPXl6DVT3eLYvPzg_S643MMTwmFYBQ4=" alt="login user"/>
            </span>
            <form onSubmit={login} className=" p-8 flex flex-col justify-around rounded-lg shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.2)]" >
                <h1 className="font-bold text-3xl">Inicio de sesión de proveedores</h1>
                <hr/>
                <article className="flex flex-col">
                <label className="font-bold" htmlFor="email">Correo</label>
                <input name="email" type="email"/>
                </article>
                <article className="flex flex-col">
                <label className="font-bold" htmlFor="password">Contraseña</label>
                <input name="password" type="password"/>
                </article>
                <button className="bg-blue-500 text-white font-bold py-2 rounded-md" type="submit" >Iniciar sesión</button>
                <article className="flex justify-center">

                <Link href="/login">
                <a className="text-blue-400">
                    Si posees una cuenta de usuario inicia sesión aquí!
                </a>
                </Link>
                </article>
                <hr className="bg-gray-300"/>
                <article className="flex justify-center">
                <Link href="/register/empresa">
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