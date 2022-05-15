import Link from "next/link";
import { IoAnalyticsOutline, IoDocumentTextOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
import { getFormatRoute } from "../../../utils";
import { useState } from "react";
import { clearToken, methodPutAuth } from "../../../utils/fetch";
import { ErrorResponse } from "../../../types/methods";
export default function StaticNav():JSX.Element{
    const {pathname,push}=useRouter();
    const [show,setShow]=useState(false);
    const logout=async()=>{
        try{
            const response=await methodPutAuth("auth/logoutUsuario",localStorage.getItem("tokenLogin"),{}) as Response|ErrorResponse ;
            if("error" in response){
                console.log("error al cerrar sesión ",response.message," ",response.error);
            }else{
                localStorage.removeItem("tokenLogin");
                await clearToken();
                push("/login");
            }
        }catch(err){
            console.log("error ",err);
        }
    }
    return(
        <aside className="hidden md:flex  sticky top-0 bottom-0 z-20 flex-col 2xl:py-6 2xl:px-10 py-4 px-4 lg:px-8 h-screen bg-gray-100 dark:bg-gray-900">
            <div className=" " >
                <img className="w-8 2xl:w-12 h-auto" src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
            </div>
            <ul className="flex flex-col flex-1  justify-around" >
                <li>
                    <Link href="/userAccount" >
                        <a className={`text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 
                        ${getFormatRoute(pathname)==="userAccount" || getFormatRoute(pathname)==="dashboard" || getFormatRoute(pathname)==="proveedoresFrecuentes" || getFormatRoute(pathname)==="mejoresOfertas"
                        ?"text-yellow-500":"text-gray-400 dark:text-white"} `} >
                            <IoAnalyticsOutline/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/userAccount/licitaciones" >
                        <a className={`text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 ${pathname.split("/").pop()==="licitaciones" || getFormatRoute(pathname)==="crearLicitacion" || getFormatRoute(pathname)==="actualizarLicitacion"?"text-yellow-500":"text-gray-400 dark:text-white"} `} >
                            <IoDocumentTextOutline/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/userAccount" >
                        <a className={`text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 ${pathname.split("/").pop()==="questions"?"text-yellow-500":"text-gray-400 dark:text-white"} `} >
                            <AiOutlineQuestionCircle/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/userAccount" >
                        <a className={`text-2xl 2xl:text-4xl transition-all duration-300 dark:hover:text-yellow-500 hover:text-yellow-500 ${pathname.split("/").pop()==="settings"?"text-yellow-500":"text-gray-400 dark:text-white"} `} >
                            <FiSettings/>
                        </a>
                    </Link>
                </li>
            </ul>
            <div  className="relative " >
                <div className={`${show?"flex flex-col":"hidden"} w-64 2xl:w-80 2xl:text-2xl shadow-2xl rounded absolute 2xl:left-24 2xl:p-6 left-20 bottom-0 bg-white `}>
                    <article className="flex p-4 bg-gray-50">
                        
                        <img className="w-16 h-16 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />
                    
                        <div className="flex flex-col p-2 justify-center">
                            <p className=" 2xl:text-2xl font-semibold" >John Doe</p>
                            <p className="text-xs 2xl:text-sm font-semibold text-gray-400 uppercase" >Usuario</p>
                        </div>
                    </article>
                    <div className="flex">
                        <ul className="divide-y w-full">
                            <li className="flex transition-all 2xl:py-4 duration-300 items-center cursor-pointer hover:bg-gray-100">
                                <span className="flex items-center 2xl:text-2xl text-lg p-4">
                                    <AiOutlineUser/>
                                </span>
                                <article>
                                    <p className="text-sm 2xl:text-lg font-semibold">Perfil</p>
                                    <p className="text-xs 2xl:text-base font-semibold text-gray-400">Ver tu perfil</p>
                                </article>
                            </li>
                            <li className="flex transition-all 2xl:py-4 duration-300 items-center cursor-pointer hover:bg-gray-100">
                                <span className="flex items-center 2xl:text-2xl text-lg p-4">
                                    <FiSettings/>
                                </span>
                                <article>
                                    <p className="text-sm 2xl:text-lg font-semibold">Configuraciones</p>
                                    <p className="text-xs 2xl:text-base font-semibold text-gray-400">Ajustes de tu cuenta</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <article className="flex justify-center py-4">
                        <button onClick={logout} className="py-2 transition-all 2xl:text-xl duration-300 rounded px-4 bg-yellow-500 text-white hover:opacity-80">Cerrar sesión</button>
                    </article>
                </div>
                <img onClick={()=>show?setShow(false):setShow(true)} className="cursor-pointer w-8 2xl:w-12 2xl:h-12 h-8 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />
            </div>
        </aside>
    )
}