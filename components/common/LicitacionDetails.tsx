import { Licitacion } from "../../types/data"

type Props={
    licitacion:Omit<Licitacion,"usuario"|"participantes">
}
export default function LicitacionDetails({licitacion}:Props){
    return(
        <div className="p-4 flex flex-col bg-white rounded ">
                    <h1 className="text-center text-xl underline font-bold" >Licitación: {licitacion.title}</h1>
                    <article className="py-2" >
                        <label className="font-bold" htmlFor="description">Descripción:</label>
                        <p id="description" >{licitacion.description}</p>
                    </article>
                    <article className="flex justify-around " >
                        <ul>
                            <li> <label className="font-bold" htmlFor="fechaInicioApertura">Fecha de Inicio de Apertura:</label> <p id="fechaInicioApertura" >{licitacion.fechaInicioApertura}</p></li>
                            <li><label className="font-bold" htmlFor="fechaFinApertura">Fecha de Fin de Apertura:</label> <p id="fechaFinApertura" >{licitacion.fechaFinApertura}</p></li>
                            <li><label className="font-bold" htmlFor="tipoServicio">Tipo de Servicio:</label> <p id="tipoServicio" >{licitacion.tipoServicio.name}</p></li>
                            <li><label className="font-bold" htmlFor="numLicitacion">Número de Licitación:</label> <p id="numLicitacion" >{licitacion.numLicitacion}</p></li>
                            <li><label className="font-bold" htmlFor="puntoSum">Punto de Suministro:</label> <p id="puntoSuum" >{licitacion.puntoSum.name}</p></li>
                            <li><label className="font-bold" htmlFor="factorPlanta">Factor Planta:</label> <p id="factorPlamta" >{licitacion.factorPlanta}</p></li>
                        </ul>
                        <ul>
                            <li><label className="font-bold" htmlFor="estado">Estado:</label> <p id="estado" >{licitacion.estado}</p></li>
                            <li><label className="font-bold" htmlFor="empresa">Empresa:</label> <p id="empresa" >{licitacion.empresa}</p></li>
                            <li><label className="font-bold" htmlFor="fechaInicio">Fecha de Inicio:</label> <p id="fechaInicio" >{licitacion.fechaInicio}</p></li>
                            <li><label className="font-bold" htmlFor="fechaFin">Fecha de Fin:</label> <p id="fechaFin" >{licitacion.fechaFin}</p></li>
                            <li><label className="font-bold" htmlFor="brg">BRG:</label> <p id="brg" >{licitacion.brg.name}</p></li>
                            <li><label className="font-bold" htmlFor="author">Autor:</label><p id="author">{licitacion.author}</p></li>
                        </ul>
                    </article>
                        <article className="py-2" >
                            <label className="font-bold" htmlFor="requisitos">Requisitos:</label>
                            <p id="requisitos" >{licitacion.requisitos}</p>
                        </article>
                        <article>
                            <table className="bg-gray-100 dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4" >
                                <thead  >
                                    <tr className="text-sm font-semibold dark:divide-gray-500 dark:text-gray-400 divide-x" >

                                    <th className="p-4" >Mes</th>
                                    <th className="p-4" >HP</th>
                                    <th className="p-4" >HFP</th>
                                    </tr>
                                </thead>
                                <tbody className="dark:divide-gray-500 divide-y" >
                                    {licitacion.meses.map((el,i)=>(
                                        <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x" key={`${licitacion._id}-mes-${i}`}>
                                            <td className="p-4 text-center" >{el.mes}</td>
                                            <td className="p-4 text-center" >{el.hp}</td>
                                            <td className="p-4 text-center" >{el.hfp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </article>
                </div>
    )
}