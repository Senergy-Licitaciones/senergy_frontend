import Link from 'next/link'
import { AiOutlineEdit, AiOutlineFileSearch } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { Licitacion } from '@mytypes/models'
type Props={
    licitaciones:Array<Licitacion>
}
export default function TableLicitacionesUser ({ licitaciones }:Props) {
  return (
        <>
        <div className="flex justify-between">
                    <article className="flex flex-col 2xl:w-44 w-32">
                        <select className="rounded 2xl:text-2xl dark:bg-gray-800 dark:text-zinc-200" value={5} name="" id="">
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
                            <th className="p-4">#LICITACIÓN</th>
                            <th className="p-4">TÍTULO</th>
                            <th className="p-4 text-xs ">FECHA INICIO APERTURA</th>
                            <th className="p-4 text-xs ">FECHA FIN APERTURA</th>
                            <th className="p-4">ESTADO</th>
                            <th className="p-4">AUTOR</th>
                            <th className="p-4">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-600 divide-y">
                        {licitaciones.map((el) => (
                        <tr key={el._id} className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">
                            <td className="font-semibold p-4" >
                                {el.numLicitacion}
                            </td>
                            <td className="font-semibold p-4">
                                {el.title}
                            </td>
                            <td className="p-4">
                                {el.fechaInicioApertura}
                            </td>
                            <td className="p-4">
                                {el.fechaFinApertura}
                            </td>
                            <td className="p-4 uppercase">
                                {el.estado}
                            </td>
                            <td className="p-4">
                                {el.author}
                            </td>
                            <td className="p-4 flex justify-around" >
                                <Link href={`/userAccount/licitaciones/${el._id}/edit`} >
                                <a className="bg-green-500 relative after:top-full after:left-0 after:text-green-500 after:hidden after:absolute hover:after:block after:text-xs after:content-['Editar'] text-white p-2 text-xl rounded" >
                                    <AiOutlineEdit/>
                                </a>
                                </Link>
                                 <Link href={`/userAccount/licitaciones/${el._id}`} >
                                <a className="bg-yellow-500 relative after:top-full after:left-0 after:text-yellow-500 after:hidden after:absolute hover:after:block after:text-xs after:content-['Detalles'] text-white p-2 text-xl rounded" >
                                    <AiOutlineFileSearch/>
                                </a>
                                </Link>
                            </td>
                        </tr>
                        ))}
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
                </article></>
  )
}
