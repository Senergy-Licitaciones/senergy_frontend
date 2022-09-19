import Link from 'next/link'
import { AiOutlineFileAdd, AiOutlineFileSearch } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { Licitacion } from '@mytypes/models'
import { Input, Option, Select } from '@material-tailwind/react'
type Props={
    licitaciones:Licitacion[]
}
export default function TableLicitaciones ({ licitaciones }:Props) {
  return (
            <>
        <div className="flex justify-between">
                    <article className="flex flex-col 2xl:w-44 w-32">
                        <Select label='Ítems por Página' defaultValue={'5'} id="">
                            <Option value={'5'}>5</Option>
                            <Option value={'10'}>10</Option>
                        </Select>
                    </article>
                    <article className="flex 2xl:text-2xl items-center relative" >
                    <Input label="Buscar" type="search"/>
                    <span className="flex items-center absolute dark:text-gray-300 text-gray-700 right-4">
                        <BsSearch/>
                    </span>
                    </article>
                </div>
                <table className="bg-white  dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                    <thead>
                        <tr className="text-sm 2xl:text-lg dark:text-gray-400 dark:divide-gray-600 font-semibold divide-x">
                            <th className="p-4">CLIENTE</th>
                            <th className="p-4">TÍTULO</th>
                            <th className="p-4 text-xs 2xl:text-base ">FECHA INICIO APERTURA</th>
                            <th className="p-4 text-xs 2xl:text-base ">FECHA FIN APERTURA</th>
                            <th className="p-4">#LICITACIÓN</th>
                            <th className="p-4">SERVICIO</th>
                            <th className="p-4">
                                ACCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-600 divide-y">
                        {
                            licitaciones.map((el) => (

                        <tr key={el._id} className="text-sm 2xl:text-lg dark:divide-gray-600 dark:text-gray-400 divide-x">

                            <td className="p-4 ">
                                {el.empresa}
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
                            <td className="p-4">
                                {el.numLicitacion}
                            </td>
                            <td className="p-4">
                                {el.tipoServicio.name}
                            </td>
                            <td className="p-4 flex justify-around " >
                                <Link href={`/empresaAccount/licitaciones/${el._id}/oferta`} >

                                <a className="bg-green-500 after:hidden hover:after:block after:text-green-500 after:text-xs after:absolute relative after:top-full after:left-0 after:content-['Participar'] text-white p-2 text-xl rounded" >
                                    <AiOutlineFileAdd/>
                                </a>
                                </Link>
                                <Link href={`/empresaAccount/licitaciones/${el._id}`} >
                                <a className="bg-yellow-500 text-white p-2 text-xl rounded relative after:absolute after:hidden hover:after:block after:text-yellow-500 after:top-full after:left-0 after:text-xs after:content-['Detalles'] " >
                                    <AiOutlineFileSearch/>
                                </a>
                                </Link>
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
