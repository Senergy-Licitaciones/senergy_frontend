import Link from "next/link";
import LayoutHome from "../../components/layout";
import {useRouter} from "next/router";
export default function RegisterUser():JSX.Element{
    const {push}=useRouter();
    const register=(e:any):void=>{
        e.preventDefault();
        push("/login");
    }
    return(
        <LayoutHome>
            <section className="p-8">
                <div className="shadow-2xl overflow-hidden flex rounded-xl ">
                    <form onSubmit={register} className="p-8 2xl:p-12 2xl:text-2xl flex flex-col">
                        <h1 className="font-extrabold text-4xl 2xl:text-5xl text-center ">Registro de usuarios</h1>
                        <hr className="bg-gray-400 my-4" />
                        <article className="flex flex-col my-2">
                            <label htmlFor="email">Correo</label>
                            <input name="email" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="password">Contraseña</label>
                            <input name="password" type="password" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="razon_social">Razón social</label>
                            <input name="razon_social" type="text" />
                        </article>
                        <article className="flex flex-col my-4" >
                            <label htmlFor="dni">DNI</label>
                            <input name="dni" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="nombres">Nombres</label>
                            <input name="nombres" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input name="apellidos" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="phone">Teléfono de contacto</label>
                            <input name="phone" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="web">Sitio web</label>
                            <input type="text" name="web" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="address">Dirección</label>
                            <input type="text" name="address" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="description">Descripción</label>
                            <textarea name="description" className="resize-none" cols={30} rows={10}></textarea>
                           
                        </article>
                        <article className="my-2 flex items-center">
                            <input className="focus:outline-purple-500 text-purple-600" type="checkbox" name="terminos"  />
                            <label className="ml-2" htmlFor="terminos">Acepto los <a className="text-blue-500" href="">Términos y condiciones</a></label>
                        </article>
                        <button type="submit" className="my-4 2xl:py-3 rounded-md py-2 font-bold bg-blue-500 text-white">Registrarse</button>
                        <article className="flex justify-center">

                        <Link href="/login">
                        <a className="text-blue-500">¿Ya posees una cuenta?, inicia sesión ahora!</a>
                        </Link>
                        </article>
                        <hr className="my-4 bg-gray-400" />
                        <article className=" flex justify-center">
                        <Link href="/register/empresa">
                            <a className="text-blue-500">
                                Si deseas participar en licitaciones, regístrate como proveedor aquí!
                            </a>
                        </Link>
                        </article>
                    </form>
                    <span className=" hidden md:flex flex-1" >
                        <img className="w-full h-auto" src="https://media.istockphoto.com/photos/pylon-picture-id661805558?k=20&m=661805558&s=612x612&w=0&h=Co2VIXzP1r7nP_C1gBfnjglEGaFmEiXl7s8h4BZhYjo=" alt="empresa registro" />
                    </span>
                </div>
            </section>
        </LayoutHome>
    )
}