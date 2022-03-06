import LayoutUser from "../../../components/layout/layoutUser/LayoutUser";

export default function ActualizarLicitacion():JSX.Element{
    return(
        <LayoutUser>
            <section>
                <div className="flex justify-between">
                    <article className="flex flex-col w-32">
                        <select className="rounded dark:bg-gray-800 dark:text-white" value={5} name="" id="">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </select>
                        <p className="text-sm text-gray-500">items por página</p>
                    </article>
                    <article className="flex items-center" >
                    <input placeholder="Buscar..." className="rounded dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-800" type="search"/>
                    </article>
                </div>
                <table className="bg-white dark:bg-gray-800 dark:divide-gray-500 w-full divide-y mt-4">
                    <thead>
                        <tr className="text-sm font-semibold dark:divide-gray-500 dark:text-gray-400 divide-x">
                            <th className="p-4">IMAGEN</th>
                            <th className="p-4">TÍTULO</th>
                            <th className="p-4">FECHA CREACIÓN</th>
                            <th className="p-4">ESTADO</th>
                            <th className="p-4">CÓDIGO</th>
                            <th className="p-4">PARTICIPANTES</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:divide-gray-500 divide-y">
                        <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x">
                            <td>
                                <img src="" alt=""/>
                            </td>
                            <td className="font-semibold p-4">
                                Licitación 01
                            </td>
                            <td className="p-4">
                                23/12/2021
                            </td>
                            <td className="p-4">
                                <select className="dark:bg-gray-800" value={"2"} name="" id="">
                                    <option value="0">Creado</option>
                                    <option value="1">Apertura</option>
                                    <option value="2">Evaluación</option>
                                    <option value="3">Cierre</option>
                                </select>
                            </td>
                            <td className="p-4">
                                AZX-112123
                            </td>
                            <td className="p-4">
                                34
                            </td>
                        </tr>
                        <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x">
                            <td>
                                <img src="" alt=""/>
                            </td>
                            <td className="font-semibold p-4">
                                Licitación 02
                            </td>
                            <td className="p-4">
                                23/11/2021
                            </td>
                            <td className="p-4">
                                <select className="dark:bg-gray-800" value={"1"} name="" id="">
                                    <option value="0">Creado</option>
                                    <option value="1">Apertura</option>
                                    <option value="2">Evaluación</option>
                                    <option value="3">Cierre</option>
                                </select>
                            </td>
                            <td className="p-4">
                                BZX-102111
                            </td>
                            <td className="p-4">
                                5
                            </td>
                        </tr>
                        <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x">
                            <td>
                                <img src="" alt=""/>
                            </td>
                            <td className="font-semibold p-4">
                                Licitación 03
                            </td>
                            <td className="p-4">
                                15/12/2021
                            </td>
                            <td className="p-4">
                                <select className="dark:bg-gray-800" value={"3"} name="" id="">
                                    <option value="0">Creado</option>
                                    <option value="1">Apertura</option>
                                    <option value="2">Evaluación</option>
                                    <option value="3">Cierre</option>
                                </select>
                            </td>
                            <td className="p-4">
                                BZU-102109
                            </td>
                            <td className="p-4">
                                16
                            </td>
                        </tr>
                    </tbody>
                </table>
                <article className="flex justify-center mt-8" >
                <button className="bg-yellow-500 text-white rounded-xl py-2 px-4" >
                    Actualizar cambios
                </button>

                </article>
            </section>
        </LayoutUser>
    )
}