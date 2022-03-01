import LayoutHome from "../../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";
export default function RegisterEmpresa():JSX.Element{
    const {push}=useRouter();
    const register=(e:any):void=>{
        e.preventDefault();
        push("/login/empresa");
    }
    return(
        <LayoutHome>
            <section className="p-8">
                <div className="shadow-2xl flex">
                    <form onSubmit={register} className="p-8 flex flex-col">
                        <h1 className="font-extrabold text-4xl text-center ">Registro de proveedores</h1>
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
                            <label htmlFor="ruc">RUC</label>
                            <input name="ruc" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label htmlFor="address">Dirección</label>
                            <input name="address" type="text" />
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
                            <label htmlFor="pais">País</label>
                            <select name="pais">
                                <option value="peru">Perú</option>
                                <option value="chile">Chile</option>
                            </select>
                        </article>
                        <article className="my-2 flex items-center">
                            <input className="focus:outline-purple-500 text-purple-600" type="checkbox" name="terminos"  />
                            <label className="ml-2" htmlFor="terminos">Acepto los <a className="text-blue-500" href="">Términos y condiciones</a></label>
                        </article>
                        <button type="submit" className="my-4 rounded-md py-2 font-bold bg-blue-500 text-white">Registrarse</button>
                        <article className="flex justify-center">

                        <Link href="/login/empresa">
                        <a className="text-blue-500">¿Ya posees una cuenta?, inicia sesión ahora!</a>
                        </Link>
                        </article>
                        <hr className="my-4 bg-gray-400" />
                        <article className=" flex justify-center">
                        <Link href="/register">
                            <a className="text-blue-500">
                                Si deseas realizar licitaciones, regístrate como usuario aquí!
                            </a>
                        </Link>
                        </article>
                    </form>
                    <span className="hidden md:flex flex-1" >
                        <img className="w-full h-auto" src="https://media.istockphoto.com/photos/looking-directly-up-at-the-skyline-of-the-financial-district-in-picture-id1215119911?k=20&m=1215119911&s=612x612&w=0&h=xnJVMO0gPzC1Joa9bTzVOQn74dmh6vWeIntDag7I3jQ=" alt="empresa registro" />
                    </span>
                </div>
            </section>
        </LayoutHome>
    )
}