import { useRouter } from "next/router"
import { getFormatRoute, getRouteTitle } from "../../../utils";
import {IoIosArrowBack} from "react-icons/io";
import { BsBell, BsSunFill } from "react-icons/bs";
import { useTemplate } from "../../../stateManagement/contexts/HandleTemplateContext";
import { ReactNode } from "react";
import { ValueTemplateProvider } from "../../../types/stateManagement/handleTemplate";
import { RiMenu4Line } from "react-icons/ri";
type Props = {
  children?: ReactNode
}
export default function HeaderUser({children}:Props):JSX.Element{
    const {pathname}=useRouter();
    const {template,toggleDynamicNav,toggleTheme}:ValueTemplateProvider=useTemplate();
    return(
        <section className="bg-gray-200 dark:bg-gray-700 flex-1 " >
          <div className="sticky p-4 flex justify-between bg-gray-900 top-0 z-30 md:hidden" >
            <button className="text-gray-200" >
              <RiMenu4Line/>
            </button>
            <div className=" " >
                <img className="w-24 h-auto" src="https://res.cloudinary.com/dream-music/image/upload/v1632869216/senergy/logo_n49xb5.png" alt="logo senergy" />
            </div>
            <nav></nav>
          </div>
        <header className="py-4 px-8 flex justify-between">
            <div className="flex text-lg md:text-2xl" >
                <span onClick={toggleDynamicNav} className={`transition-all duration-500 cursor-pointer hidden md:flex items-center mr-4 text-3xl text-yellow-500 ${!template.dynamicNavState && "rotate-180"}`} >
                    <IoIosArrowBack/>
                </span>
            <h1 className="font-semibold flex dark:text-gray-300 items-center" >{getRouteTitle(getFormatRoute(pathname))}</h1>

            </div>
            <nav>
                <ul className="flex items-center" >
                    <li className="px-2">
                      <span onClick={toggleTheme} className="flex items-center text-yellow-500 text-2xl rounded-full hover:bg-white p-2 dark:hover:bg-gray-900 cursor-pointer transition-all duration-300 " >
                        <BsSunFill/>
                      </span>  
                    </li>
                    <li className="px-2">
                        <span className="flex items-center text-yellow-500 text-2xl rounded-full hover:bg-white dark:hover:bg-gray-900 p-2 cursor-pointer transition-all duration-300 " >
                        <div className="w-8 h-8 bg-cover rounded-full bg-english-lang "  ></div>
                      </span> 
                    </li>
                    <li className="px-2">
                        <span className="flex items-center dark:text-gray-300 text-gray-500 text-2xl rounded-full hover:bg-white dark:hover:bg-gray-900 p-2 cursor-pointer transition-all duration-300 " >
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