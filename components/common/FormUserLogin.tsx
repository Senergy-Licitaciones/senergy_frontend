import Link from "next/link";
import { useRouter } from "next/router";
import { FormLogin, HandleSubmit, HookLogin } from "../../types/form";
import { ErrorResponse, LoginResponse } from "../../types/methods";
import { methodPut, saveToken } from "../../utils/fetch";
import { useForm } from "../hooks/useForm";
import swal from "sweetalert";
import Loader from "./Loader";
const initForm:FormLogin={
    correo:"",
    password:""
}
export default function FormUserLogin(){
    const {push}=useRouter();
    
    const {form,handleChange,loading,setLoading}=useForm(initForm) as HookLogin ;
    const loginUser:HandleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        const response=await methodPut("auth/loginUsuario",form) as LoginResponse|ErrorResponse ;
        if("error" in response){
            console.log("error ",response.message," obj error ",response.error);
            setLoading(false);
            swal(response.message,response.error.toString(),"error");
        }else{
            localStorage.setItem("tokenLogin",response.token);
            await saveToken({token:response.token});
            setLoading(false);
            swal("Inicio de Sesión exitosa",response.message,"success").then((val)=>{
                push("/userAccount");
            });
        }
    }
    return(
        <form onSubmit={loginUser} className={` transition-all duration-500 2xl:p-12 2xl:text-2xl p-8 flex flex-col justify-around rounded-lg shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.2)]`} >
                <h1 className="font-bold text-3xl 2xl:text-4xl">Inicio de sesión de usuarios</h1>
                <hr/>
                <article className="flex my-4 flex-col">
                <label className="font-bold" htmlFor="correo">Correo</label>
                <input onChange={handleChange} value={form.correo} name="correo" type="email"/>
                </article>
                <article className="flex my-4 flex-col">
                <label className="font-bold" htmlFor="password">Contraseña</label>
                <input onChange={handleChange} value={form.password} name="password" type="password"/>
                </article>
                {
                    loading?
                    <article className="flex justify-center" >
                        <Loader/>
                    </article>
                    :
                    <button className="bg-blue-500 mb-4 text-white font-bold py-2 rounded-md" type="submit" >Iniciar sesión</button>
                }
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
    )
}