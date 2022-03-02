import { NextRouter, useRouter } from "next/router"
import { getFormatRoute, getRouteTitle, getRouteTitleProveedor } from "../../../utils";
import {IoIosArrowBack} from "react-icons/io";
import { BsBell, BsSunFill } from "react-icons/bs";
import { useTemplate } from "../../../stateManagement/contexts/HandleTemplateContext";
import { ReactNode, useState } from "react";
import { ValueTemplateProvider } from "../../../types/stateManagement/handleTemplate";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import NavResponsiveProveedor from "./NavResponsiveProveedor";
type Props={
    children?:ReactNode
}
export default function HeaderProveedor({children}:Props):JSX.Element{
   const {pathname,push}=useRouter();
    const [show,setShow]=useState(false);
    const [navResponsive,setNavResponsive]=useState(false);
    const {template,toggleDynamicNav,toggleTheme}:ValueTemplateProvider=useTemplate();
    return(
        <section className="bg-gray-200 flex-1 " >
            <div className="sticky p-4 flex justify-between bg-gray-900 top-0 z-30 md:hidden" >
            <button onClick={()=>navResponsive?setNavResponsive(false):setNavResponsive(true)} className="text-gray-200" >
              <RiMenu4Line/>
            </button>
            <div className=" " >
                <img className="w-24 h-auto" src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
            </div>
            <nav>
              <div  className="relative " >
                <div className={`${show?"flex flex-col":"hidden"} w-64 shadow-2xl rounded absolute right-0 top-20 bg-white `}>
                    <article className="flex p-4 bg-gray-50">
                        
                        <img className="w-16 h-16 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />
                    
                        <div className="flex flex-col p-2 justify-center">
                            <p className="font-semibold" >John Doe</p>
                            <p className="text-xs font-semibold text-gray-400 uppercase" >Usuario</p>
                        </div>
                    </article>
                    <div className="flex">
                        <ul className="divide-y w-full">
                            <li className="flex transition-all duration-300 items-center cursor-pointer hover:bg-gray-100">
                                <span className="flex items-center text-lg p-4">
                                    <AiOutlineUser/>
                                </span>
                                <article>
                                    <p className="text-sm font-semibold">Perfil</p>
                                    <p className="text-xs font-semibold text-gray-400">Ver tu perfil</p>
                                </article>
                            </li>
                            <li className="flex transition-all duration-300 items-center cursor-pointer hover:bg-gray-100">
                                <span className="flex items-center text-lg p-4">
                                    <FiSettings/>
                                </span>
                                <article>
                                    <p className="text-sm font-semibold">Configuraciones</p>
                                    <p className="text-xs font-semibold text-gray-400">Ajustes de tu cuenta</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <article className="flex justify-center py-4">
                        <button onClick={()=>push("/")} className="py-2 transition-all duration-300 rounded px-4 bg-yellow-500 text-white hover:opacity-80">Cerrar sesión</button>
                    </article>
                </div>
                <img onClick={()=>show?setShow(false):setShow(true)} className="cursor-pointer w-8 h-8 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user profile" />
            </div>
            </nav>
          </div>
        <header className="py-4 px-8 flex justify-between">
            <div className="flex text-2xl" >
                <span onClick={toggleDynamicNav} className={`transition-all duration-500 cursor-pointer flex items-center mr-4 text-3xl text-yellow-500 ${!template.dynamicNavState && "rotate-180"}`} >
                    <IoIosArrowBack/>
                </span>
            <h1 className="font-semibold flex items-center" >{getRouteTitleProveedor(getFormatRoute(pathname))}</h1>

            </div>
            <nav>
                <ul className="flex items-center" >
                    <li className="px-2">
                      <span onClick={toggleTheme} className="flex items-center text-yellow-500 text-2xl rounded-full hover:bg-white p-2 cursor-pointer transition-all duration-300 " >
                        <BsSunFill/>
                      </span>  
                    </li>
                    <li className="px-2">
                        <span className="flex items-center text-yellow-500 text-2xl rounded-full hover:bg-white p-2 cursor-pointer transition-all duration-300 " >
                        <div className="w-8 h-8 bg-cover rounded-full bg-english-lang "  ></div>
                      </span> 
                    </li>
                    <li className="px-2">
                        <span className="flex items-center text-gray-500 text-2xl rounded-full hover:bg-white p-2 cursor-pointer transition-all duration-300 " >
                        <BsBell/>
                      </span> 
                    </li>
                </ul>
            </nav>
        </header>
        <main className="p-8">
            {children}
        </main>
        {navResponsive && <NavResponsiveProveedor/>}
        </section>
    )
}