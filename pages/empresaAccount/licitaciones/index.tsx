import LayoutProveedor from "../../../components/layout/layoutProveedor";
import {BsSearch} from "react-icons/bs";
import {AiOutlineFileAdd,AiOutlineFileSearch} from "react-icons/ai";
import Link from "next/link";
const id=1;
export default function BuscadorLicitaciones(){
    return(
        <LayoutProveedor>
            <section>
                <div className="flex justify-between">
                    <article className="flex flex-col 2xl:w-44 w-32">
                        <select className="rounded 2xl:text-2xl dark:bg-gray-800 dark:text-zinc-200" defaultValue={5} name="" id="">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </select>
                        <p className="text-sm 2xl:text-lg dark:text-gray-400 text-gray-500">items por página</p>
                    </article>
                    <article className="flex 2xl:text-2xl items-center relative" >
                    <input placeholder="Buscar..." className="2xl:placeholder:text-2xl 2xl:p-4 rounded dark:placeholder:text-gray-300 dark:bg-gray-800 dark:text-gray-200" type="search"/>
                    <span className="flex items-center absolute dark:text-gray-300 text-gray-700 right-4">
                        <BsSearch/>
                    </span>
                    </article>
                </div>
                <table className="bg-white dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                    <thead>
                        <tr className="text-sm 2xl:text-lg dark:text-gray-400 dark:divide-gray-600 font-semibold divide-x">
                            <th className="p-4">TÍTULO</th>
                            <th className="p-4">FECHA INICIO APERTURA</th>
                            <th className="p-4">FECHA FIN APERTURA</th>
                            <th className="p-4">ESTADO</th>
                            <th className="p-4">#LICITACIÓN</th>
                            <th className="p-4">SERVICIO</th>
                            <th className="p-4">
                                ACCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-600 divide-y">
                        <tr className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">
                            
                            <td className="font-semibold p-4">
                                Licitación 01
                            </td>
                            <td className="p-4">
                                23/12/2021
                            </td>
                            <td className="p-4">
                                23/12/2023
                            </td>
                            <td className="p-4">
                                ABIERTO
                            </td>
                            <td className="p-4">
                                1025
                            </td>
                            <td className="p-4">
                                Servicio 03
                            </td>
                            <td className="p-4 flex justify-around " >
                                <Link href={`/empresaAccount/licitaciones/${id}/oferta`} >
                                
                                <a className="bg-green-500 text-white p-2 text-xl rounded" >
                                    <AiOutlineFileAdd/>
                                </a>
                                </Link>
                                <button className="bg-yellow-500 text-white p-2 text-xl rounded" >
                                    <AiOutlineFileSearch/>
                                </button>
                            </td>
                        </tr>
                        <tr className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">
                         
                            <td className="font-semibold p-4">
                                Licitación 02
                            </td>
                            <td className="p-4">
                                23/11/2021
                            </td>
                            <td className="p-4">
                                23/11/2024
                            </td>
                            <td className="p-4">
                                ABIERTO
                            </td>
                            <td className="p-4">
                                1081
                            </td>
                            <td className="p-4">
                                Servicio 01
                            </td>
                            <td className="p-4 flex justify-around ">
                                <button className="bg-green-500 text-white p-2 text-xl rounded" ><AiOutlineFileAdd/></button>
                                <button className="bg-yellow-500 text-white p-2 text-xl rounded" >
                                    <AiOutlineFileSearch/>
                                </button>
                            </td>
                        </tr>
                        <tr className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">
                            <td className="font-semibold p-4">
                                Licitación 03
                            </td>
                            <td className="p-4">
                                15/12/2021
                            </td>
                            <td className="p-4">
                                15/12/2025
                            </td>
                            <td className="p-4">
                                CERRADO
                            </td>
                            <td className="p-4">
                                1550
                            </td>
                            <td className="p-4">
                                Servicio 02
                            </td>
                            <td className="p-4 flex justify-around" >
                                <button className="bg-yellow-500 text-white p-2 text-xl rounded" >
                                    <AiOutlineFileSearch/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <article className="flex justify-between items-center py-4" >
                    <div className="dark:text-gray-400 2xl:text-lg text-sm">
                        Mostrando de 1 a 5 de 17 items 
                    </div>
                    <div className="flex 2xl:text-xl">
                        <span className="bg-yellow-500 flex shadow-xl cursor-pointer rounded-full 2xl:w-12 2xl:h-12 w-8 h-8 justify-center items-center text-white">
                            1
                        </span>
                        <span className="flex mx-2 rounded-full cursor-pointer hover:bg-white hover:text-black 2xl:w-12 2xl:h-12 w-8 h-8 justify-center items-center dark:text-gray-200" >
                            2
                        </span>
                    </div>
                </article>
            </section>
        </LayoutProveedor>
    )
}