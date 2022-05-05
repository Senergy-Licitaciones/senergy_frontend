import { Dispatch, FormEvent, SetStateAction } from "react";
import { AiFillCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";

type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>
}

export default function FormCrearLicitacion({step,setStep}:Props){
    const sendForm=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{

        }catch(err){

        }
    }
    return(
        <form onSubmit={sendForm} className="flex-1 mb-4 md:m-0">
                    <div className={`bg-white p-4 dark:bg-gray-900 ${step===1 ?"block":"hidden"}`}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Información general</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="title">Título de licitación</label>
                            <input  name="title" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 2xl:text-lg text-sm dark:text-gray-400" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea name="descripcionLicitacion" className="dark:bg-gray-800 dark:text-gray-400 rounded 2xl:placeholder:text-lg placeholder:text-sm" placeholder="Agregar descripción de licitación"  id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaInicioApertura">Fecha de inicio de Apertura</label>
                            <input className="dark:bg-gray-800 dark:text-gray-400  " name="fechaInicioApertura" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaFinApertura">Fecha de fin de Apertura</label>
                            <input className="dark:bg-gray-800 dark:text-gray-400  " name="fechaFinApertura" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoLicitacion">Tipo de Licitación</label>
                            <select className="dark:bg-gray-800 dark:text-gray-400" name="tipoLicitacion" id="">
                                <option value="">-Seleccionar un tipo de Licitación</option>
                                
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoServicio">Tipo de Servicio</label>
                            <select className="dark:bg-gray-800 dark:text-gray-400" name="tipoServicio" id="">
                                <option value="">-Seleccionar un tipo de Servicio</option>
                                
                            </select>
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`dark:bg-gray-900 bg-white p-4 ${step===2 ?"block":"hidden"}`}>
                        <p className="font-semibold dark:text-gray-400">Información detallada</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="numLicitacion">Número de Licitación</label>
                            <input name="numLicitacion" className="rounded dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Número de Licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="requisitos">Requisitos</label>
                            <textarea name="requisitos" className="rounded dark:bg-gray-800 placeholder:text-sm" placeholder="Agregar requisitos de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="estado">Estado</label>
                            <select className="dark:bg-gray-800 dark:text-gray-400" name="estado" id="">
                                <option value="">-Seleccione un estado-</option>
                                <option value="">Cerrado</option>
                                <option value="">Abierto</option>
                            </select>
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`bg-white dark:bg-gray-900 p-4 ${step===3 ?"block":"hidden"}`}>
                        <p className="font-semibold dark:text-gray-400 ">Especificaciones Técnicas</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="empresa">Empresa:</label>
                            <input name="empresa" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Nombre de Empresa" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de Inicio</label>
                            <input name="fechaInicio" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaFin">Fecha Final</label>
                            <input name="fechaFin" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="puntoSum">Punto de Suministro y Medición</label>
                            <select className="dark:bg-gray-800 dark:text-gray-400" name="puntoSum">
                                <option value="">-Seleccionar Punto de Suministro y Medición-</option>
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="brg">Barra de Referencia de Generación (BRG) </label>
                            <select className="dark:bg-gray-800 dark:text-gray-400" name="brg">
                                <option value="">-Seleccionar Barra de Referencia de Generación (BRG)-</option>
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="factorPlanta">Factor de Planta:</label>
                            <input name="factorPlanta" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Factor de Planta" type="number" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`bg-white dark:bg-gray-900 p-4 ${step===4 ?"block":"hidden"}`}>
                        <p className="font-semibold dark:text-gray-400">Validación</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="title">Coloque un correo para validar</label>
                            <input name="title" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Agregar correo de verificación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea name="descripcionLicitacion" className="dark:bg-gray-800 rounded placeholder:text-sm" placeholder="Agregar descripción de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de inicio</label>
                            <input name="fechaInicio" type="date" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button  className="bg-green-600 flex items-center group py-2 px-4 text-white">
                                <span className="flex items-center transition-all duration-300 text-2xl mr-4 group-hover:animate-bounce justify-center" >
                                    <AiFillCheckCircle/>
                                </span>
                                <p>Crear licitación</p>
                                </button>
                        </article>
                    </div>
                </form>
    )
}