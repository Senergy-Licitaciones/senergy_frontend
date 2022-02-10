import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {HiOutlineDocumentText} from "react-icons/hi";
import {RiFileHistoryLine} from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTemplate } from "../../../stateManagement/contexts/HandleTemplateContext";
import { getFormatRoute } from "../../../utils";
export default function DynamicNavProveedor(){
    const {template}=useTemplate();
    const {pathname}=useRouter();
    return(
        <aside className={`z-0 sticky top-0 bottom-0 h-screen transition-all duration-500 ${template.dynamicNavState?" w-72 p-4":" w-0 overflow-hidden"}`} >
            <div className="relative " >
                {getFormatRoute(pathname)==="licitaciones" || getFormatRoute(pathname)==="licitacionesGuardadas" ?
                <LicitacionNav/>:
                <DashboardNav/>
            }
            </div>
        </aside>
    )   
}
function LicitacionNav(){
    const [show,setShow]=useState({});
    const {pathname,push}=useRouter();
    useEffect(()=>{
        if(getFormatRoute(pathname)==="licitacioens" ) setShow({...show,licitaciones:true});
    },[]);
    console.log(show);
    return(
        <div className="right-2 absolute " >
            <div className="flex justify-center" >
                <h1 className="text-2xl text-gray-400" >Buscador</h1>
            </div>
            <ul className="flex flex-col mt-8 w-60">
                <li className="mb-2  ">
                    <div onClick={()=>push("/empresaAccount/licitaciones")} className="flex justify-between bg-white cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 group-hover:text-gray-900 ${getFormatRoute(pathname)==="licitaciones" && "text-yellow-500 font-bold"}`} >Ver licitaciones disponibles</h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname)==="licitaciones" && "rotate-90 text-yellow-500 "}`}>
                            
                            <IoIosArrowForward/>
                            
                        </span>
                    </div>
                    
                </li>
                <li className="mb-2">
                    <div onClick={()=>push("/empresaAccount/licitaciones/licitacionesGuardadas")} className="flex justify-between cursor-pointer py-2 group">
                        <h2 className={` ${getFormatRoute(pathname)==="licitacionesGuardadas" ? "text-yellow-500 font-bold":"text-gray-400 group-hover:text-gray-900"}`} >
                            Licitaciones guardadas
                        </h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname)==="licitacionesGuardadas" && " text-yellow-500 rotate-90"}`}>
                            <IoIosArrowForward/>
                        </span>
                    </div>
                   
                </li>
                <li className="mb-2">
                    <div onClick={()=>push("/empresaAccount/licitaciones/licitacionesGuardadas")} className="flex justify-between cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 group-hover:text-gray-900 ${getFormatRoute(pathname)==="actualizarLicitacion" && "text-yellow-500 font-bold"}`} >
                            Feature 03
                        </h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${getFormatRoute(pathname)==="actualizarLicitacion" && " text-yellow-500 rotate-90"}`}>
                            <IoIosArrowForward/>
                        </span>
                    </div>
                </li>
               
            </ul>
        </div>
    )
}
function DashboardNav(){
    
    const [show,setShow]=useState({});
    const {pathname}=useRouter();
    useEffect(()=>{
        if(pathname.split("/").pop()==="userAccount" || pathname.split("/").pop()==="dashboard") setShow({...show,licitaciones:true});
    },[]);
    console.log(show);
    return(
        <div className="right-2 absolute " >
            <div className="flex justify-center" >
                <h1 className="text-2xl text-gray-400" >Dashboards</h1>
            </div>
            <ul className="flex flex-col mt-8 w-60">
                <li className="mb-2  ">
                    <div onClick={()=>show.licitaciones?setShow({...show,licitaciones:false}):setShow({...show,licitaciones:true})} className="flex justify-between bg-white cursor-pointer py-2 group">
                        <h2 className={`text-gray-400 group-hover:text-gray-900 ${show.licitaciones && "text-gray-900 font-bold"}`} >Licitaciones</h2>
                        <span className={`transition-all duration-500 flex justify-center items-center text-gray-400 ${show.licitaciones && "rotate-90"}`}>
                            
                            <IoIosArrowForward/>
                            
                        </span>
                    </div>
                    <ul className={`overflow-hidden transition-all duration-500 ${show.licitaciones  ? "my-4 h-auto":"h-0"}`}>
                        <li >
                            <Link href="/empresaAccount/dashboard">
                            <a className={` flex mb-2 pl-4 py-2  ${getFormatRoute(pathname)==="dashboard"?"text-yellow-500":"text-gray-400  hover:text-gray-900"} `} >
                            <span className="flex justify-center items-center mr-2">
                                <HiOutlineDocumentText/>
                            </span>
                            <h3>Licitaciones actuales</h3>
                            </a>
                            </Link>
                        </li>
                        <li >
                            <Link href="/empresaAccount/dashboard/historialLicitaciones">
                            <a className={` flex mb-2 pl-4 py-2  ${getFormatRoute(pathname)==="historialLicitaciones"?"text-yellow-500":"text-gray-400  hover:text-gray-900"} `} >
                            <span className="flex justify-center items-center mr-2">
                                <RiFileHistoryLine/>
                            </span>
                            <h3>Historial de licitaciones</h3>
                            </a>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                
                <li className="mb-2">
                    <div className="flex justify-between cursor-pointer py-2 group">
                        <h2 className="text-gray-400 group-hover:text-gray-900" >
                            Personal
                        </h2>
                        <span className="flex justify-center items-center text-gray-400">
                            <IoIosArrowForward/>
                        </span>
                    </div>
                </li>
                <li className="mb-2">
                    <div className="flex justify-between cursor-pointer py-2 group" >
                        <h2 className="text-gray-400 group-hover:text-gray-900">Global</h2>
                        <span className="flex justify-center items-center text-gray-400">
                            <IoIosArrowForward/>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}