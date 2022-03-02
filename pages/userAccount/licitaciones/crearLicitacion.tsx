import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import LayoutUser from "../../../components/layout/layoutUser/LayoutUser";

export default function CrearLicitacion():JSX.Element{
    const [step,setStep]=useState(1);
    return(
        <LayoutUser>
            <section className="flex md:flex-row flex-col">
                <div className="flex-1 mb-4 md:m-0">
                    <div className={`bg-white p-4 dark:bg-gray-900 ${step===1 ?"block":"hidden"}`}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Información general</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="title">Título de licitación</label>
                            <input name="title" className="rounded dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm dark:text-gray-400" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea name="descripcionLicitacion" className="dark:bg-gray-800 dark:text-gray-400 rounded placeholder:text-sm" placeholder="Agregar descripción de licitación"  id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="fechaInicio">Fecha de inicio</label>
                            <input className="dark:bg-gray-800 dark:text-gray-400  " name="fechaInicio" type="date" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`dark:bg-gray-900 bg-white p-4 ${step===2 ?"block":"hidden"}`}>
                        <p className="font-semibold dark:text-gray-400">Información detallada</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm" htmlFor="docs">Documentos técnicos</label>
                            <input name="docs" className="rounded dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Agregar título de licitación" type="file" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea name="descripcionLicitacion" className="rounded placeholder:text-sm" placeholder="Agregar descripción de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de inicio</label>
                            <input name="fechaInicio" type="date" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`bg-white p-4 ${step===3 ?"block":"hidden"}`}>
                        <p className="font-semibold">Invitación a participantes</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="title">Título de licitación</label>
                            <input name="title" className="rounded placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea name="descripcionLicitacion" className="rounded placeholder:text-sm" placeholder="Agregar descripción de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de inicio</label>
                            <input name="fechaInicio" type="date" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`bg-white p-4 ${step===4 ?"block":"hidden"}`}>
                        <p className="font-semibold">Validación</p>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="title">Título de licitación</label>
                            <input name="title" className="rounded placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea name="descripcionLicitacion" className="rounded placeholder:text-sm" placeholder="Agregar descripción de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de inicio</label>
                            <input name="fechaInicio" type="date" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button  className="bg-green-600 py-2 px-4 text-white">Crear licitación</button>
                        </article>
                    </div>
                </div>
                <aside className="w-60 ml-4">
                    <ul>
                        <li className="flex items-center">
                            <article className="flex flex-col items-center">
                                <span onClick={()=>setStep(1)} className={`block cursor-pointer w-4 h-4 rounded-full ${step>=1 ?"bg-green-500 text-green-500 ":"dark:bg-gray-900 bg-gray-300"} `} ></span>
                                <span className={`block h-12 ${step>1?"bg-green-500":"dark:bg-gray-600 bg-gray-300"}  w-0.5`}></span>
                            </article>
                            <div className="ml-4 ">
                                <p className="font-semibold text-sm dark:text-gray-400 text-gray-500" >PASO 01</p>
                                <p className={`text-sm dark:text-gray-400 ${step===1?"text-black font-bold":"text-gray-500"}`}>Información general</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <article className="flex flex-col items-center">
                                <span onClick={()=>setStep(2)} className={`cursor-pointer block w-4 h-4 rounded-full ${step>=2?"bg-green-500":"dark:bg-gray-900 bg-gray-300"} `} ></span>
                                <span className={`block h-12 ${step>2?"bg-green-500":"dark:bg-gray-600 bg-gray-300"}  w-0.5`}></span>
                            </article>
                            <div className="ml-4">
                                <p className="font-semibold dark:text-gray-400 text-sm text-gray-500">PASO 02</p>
                                <p className={`text-sm dark:text-gray-400  ${step===2?"text-black font-bold":"text-gray-500"}`}>Información detallada</p>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <article className="flex flex-col items-center">
                                <span onClick={()=>setStep(3)} className={`cursor-pointer block w-4 h-4 rounded-full ${step>=3?"bg-green-500":"dark:bg-gray-900 bg-gray-300"} `} ></span>
                                <span className={`block h-12 ${step>3?"bg-green-500":"dark:bg-gray-600 bg-gray-300"}  w-0.5`}></span>
                            </article>
                            <div className="ml-4">
                                <p className="font-semibold dark:text-gray-400 text-sm text-gray-500">Paso 03</p>
                                <p className={`text-sm dark:text-gray-400 ${step===3?"text-black font-bold":"text-gray-500"}`}>Invitación de participantes</p>
                            </div>
                        </li>
                        <li className="flex">
                            <article className="flex flex-col items-center">
                                <span onClick={()=>setStep(4)} className={`cursor-pointer block w-4 h-4 rounded-full ${step>=4?"bg-green-500 ":"dark:bg-gray-900 bg-gray-300"} `} ></span>
                            </article>
                            <div className="ml-4">
                                <p className="font-semibold dark:text-gray-400 text-sm text-gray-500">Paso 04</p>
                                <p className={`text-sm dark:text-gray-400 ${step===4?"text-black font-bold ":"text-gray-500"}`}>Validación</p>
                            </div>
                        </li>
                    </ul>
                </aside>
            </section>
        </LayoutUser>
    )
}