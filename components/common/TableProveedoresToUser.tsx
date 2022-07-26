import { BsSearch } from 'react-icons/bs'
import { InfoBasicaProveedor } from '../../types/models'

type Props={
    proveedores:InfoBasicaProveedor[]
}
export default function TableProveedoresToUser ({ proveedores }:Props) {
  return (
        <>
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
                            <th className="p-4 uppercase">Proveedor</th>
                            <th className="p-4 uppercase">Ruc</th>
                            <th className="p-4 uppercase ">Teléfono</th>
                            <th className="p-4 uppercase">Correo</th>
                            <th className="p-4 uppercase">Dirección</th>
                            <th className="p-4 uppercase">Página web</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-600 divide-y">
                        {
                            proveedores.map((el) => (

                        <tr key={el._id} className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">

                            <td className="p-2 ">
                                {el.razSocial}
                            </td>
                            <td className="p-2">
                                {el.ruc}
                            </td>
                            <td className="p-2">
                                {el.phone1}
                            </td>
                            <td className="p-2">
                                {el.correo}
                            </td>
                            <td className="p-2">
                                {el.address}
                            </td>
                            <td className="p-2">
                                {el.web}
                            </td>
                        </tr>
                            ))
                        }

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
            </>
  )
}
