import { NextRouter, useRouter } from "next/router"
import { getFormatRoute, getRouteTitle, getRouteTitleProveedor } from "../../../utils";
import {IoIosArrowBack} from "react-icons/io";
import { BsBell, BsSunFill } from "react-icons/bs";
import { useTemplate } from "../../../stateManagement/contexts/HandleTemplateContext";
import { ReactNode } from "react";
import { ValueTemplateProvider } from "../../../types/stateManagement/handleTemplate";
type Props={
    children?:ReactNode
}
export default function HeaderProveedor({children}:Props):JSX.Element{
    const {pathname}:NextRouter=useRouter();
    const {template,toggleDynamicNav,toggleTheme}:ValueTemplateProvider=useTemplate();
    return(
        <section className="bg-gray-200 flex-1 " >
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
        </section>
    )
}