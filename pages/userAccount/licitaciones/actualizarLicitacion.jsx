import LayoutUser from "../../../components/layout/layoutUser";

export default function ActualizarLicitacion(){
    return(
        <LayoutUser>
            <section>
                <div className="flex justify-between">
                    <article className="flex flex-col w-32">
                        <select className="rounded" value={5} name="" id="">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </select>
                        <p className="text-sm text-gray-500">items por página</p>
                    </article>
                    <article className="flex items-center" >
                    <input placeholder="Buscar..." className="rounded" type="search"/>
                    </article>
                </div>
                <table className="bg-white w-full divide-y mt-4">
                    <thead>
                        <tr className="text-sm font-semibold divide-x">
                            <th className="p-4">IMAGEN</th>
                            <th className="p-4">TÍTULO</th>
                            <th className="p-4">FECHA CREACIÓN</th>
                            <th className="p-4">ESTADO</th>
                            <th className="p-4">CÓDIGO</th>
                            <th className="p-4">PARTICIPANTES</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr className="text-sm divide-x">
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
                                <select value={"2"} name="" id="">
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
                        <tr className="text-sm divide-x">
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
                                <select value={"1"} name="" id="">
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
                        <tr className="text-sm divide-x">
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
                                <select value={"3"} name="" id="">
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
            </section>
        </LayoutUser>
    )
}