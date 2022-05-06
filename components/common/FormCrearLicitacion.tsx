import { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import { AiFillCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { Estado, FormCrearLicitacionUser, HookCrearLicitacion, NumMes } from "../../types/form";
import { useForm } from "../hooks/useForm";

type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>
}

const formInit:FormCrearLicitacionUser={
    title:"",
    description:"",
    tipoLicitacion:"",
    tipoServicio:"",
    fechaInicioApertura:"",
    fechaFinApertura:"",
    numLicitacion:0,
    requisitos:"",
    estado:Estado.Cerrado,
    empresa:"",
    fechaInicio:"",
    fechaFin:"",
    puntoSum:"",
    brg:"",
    factorPlanta:0,
    meses:[]
}
export default function FormCrearLicitacion({step,setStep}:Props){
    const {form,handleChange,setForm}=useForm(formInit) as HookCrearLicitacion;
    
    useEffect(()=>{
        const fechaInicio=new Date(form.fechaInicio),
        fechaFin=new Date(form.fechaFin);
        if(fechaFin>fechaInicio ){
            let array:NumMes[]=[];
            do{
                array.push({
                    mes:`${fechaInicio.getMonth()+1}/${fechaInicio.getFullYear()}`,
                    hp:0,
                    hfp:0
                });
                if(fechaInicio.getMonth()+1>11){
                    fechaInicio.setFullYear(fechaInicio.getFullYear()+1);
                    fechaInicio.setMonth(0);
                }else{
                    fechaInicio.setMonth(fechaInicio.getMonth()+1);
                }
            }while(fechaInicio<=fechaFin);
            setForm({
                ...form,
                meses:array
            })
        }
    },[form.fechaInicio,form.fechaFin]);
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
                            <input onChange={handleChange} value={form.title} name="title" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar título de licitación" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 2xl:text-lg text-sm dark:text-gray-400" htmlFor="descripcionLicitacion">Descripción de licitación</label>
                            <textarea onChange={handleChange} value={form.description} name="descripcionLicitacion" className="dark:bg-gray-800 dark:text-gray-400 rounded 2xl:placeholder:text-lg placeholder:text-sm" placeholder="Agregar descripción de licitación"  id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaInicioApertura">Fecha de inicio de Apertura</label>
                            <input onChange={handleChange} value={form.fechaInicioApertura}  className="dark:bg-gray-800 dark:text-gray-400  " name="fechaInicioApertura" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="fechaFinApertura">Fecha de fin de Apertura</label>
                            <input onChange={handleChange} value={form.fechaFinApertura} className="dark:bg-gray-800 dark:text-gray-400  " name="fechaFinApertura" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoLicitacion">Tipo de Licitación</label>
                            <select onChange={handleChange} value={form.tipoLicitacion} className="dark:bg-gray-800 dark:text-gray-400" name="tipoLicitacion" id="">
                                <option value="">-Seleccionar un tipo de Licitación</option>
                                
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="tipoServicio">Tipo de Servicio</label>
                            <select onChange={handleChange} value={form.tipoServicio} className="dark:bg-gray-800 dark:text-gray-400" name="tipoServicio" id="">
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
                            <input onChange={handleChange} value={form.numLicitacion} name="numLicitacion" className="rounded dark:bg-gray-800 dark:text-gray-400 placeholder:text-sm " placeholder="Número de Licitación" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="requisitos">Requisitos</label>
                            <textarea onChange={handleChange} value={form.requisitos} name="requisitos" className="rounded dark:bg-gray-800 placeholder:text-sm" placeholder="Agregar requisitos de licitación" id="" cols={30} rows={5}></textarea>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="estado">Estado</label>
                            <select onChange={handleChange} value={form.estado} className="dark:bg-gray-800 dark:text-gray-400" name="estado" id="">
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
                            <input onChange={handleChange} value={form.empresa} name="empresa" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Nombre de Empresa" type="text" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaInicio">Fecha de Inicio</label>
                            <input onChange={handleChange} value={form.fechaInicio} name="fechaInicio" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="fechaFin">Fecha Final</label>
                            <input onChange={handleChange} value={form.fechaFin} name="fechaFin" type="date" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="puntoSum">Punto de Suministro y Medición</label>
                            <select onChange={handleChange} value={form.puntoSum} className="dark:bg-gray-800 dark:text-gray-400" name="puntoSum">
                                <option value="">-Seleccionar Punto de Suministro y Medición-</option>
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="brg">Barra de Referencia de Generación (BRG) </label>
                            <select onChange={handleChange} value={form.brg} className="dark:bg-gray-800 dark:text-gray-400" name="brg">
                                <option value="">-Seleccionar Barra de Referencia de Generación (BRG)-</option>
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 text-sm" htmlFor="factorPlanta">Factor de Planta:</label>
                            <input onChange={handleChange} value={form.factorPlanta} name="factorPlanta" className="rounded dark:bg-gray-800 placeholder:text-sm " placeholder="Factor de Planta" type="number" />
                        </article>
                        <article className="flex justify-end pt-4">
                            <button onClick={()=>setStep(step+1)} className="bg-green-600 py-2 px-4 text-white">Continuar</button>
                        </article>
                    </div>
                    <div className={`bg-white dark:bg-gray-900 p-4 ${step===4 ?"block":"hidden"}`}>
                        <p className="font-semibold dark:text-gray-400">Especificación por Mes</p>
                        <div className="max-h-96 overflow-y-auto" >
                        <table className=" bg-gray-100 dark:bg-gray-800 w-full dark:divide-gray-600 divide-y mt-4">
                            <thead>
                                <tr className="text-sm font-semibold dark:divide-gray-500 dark:text-gray-400 divide-x">

                                <th className="p-4" >MES</th>
                                <th className="p-4" >HP</th>
                                <th className="p-4" >HFP</th>
                                </tr>
                            </thead>
                            <tbody className=" dark:divide-gray-500 divide-y" >
                                {form.meses.map((mes,index)=>(
                                    <tr className="text-sm dark:divide-gray-500 dark:text-gray-400 divide-x" key={index} >
                                        <td className="p-4 text-center" >{mes.mes}</td>
                                        <td className="p-4 text-center ">
                                            <input className="bg-transparent dark:text-gray-400" onChange={(e)=>setForm({...form,meses:form.meses.map((mes,i)=>{
                                                if(i===index){
                                                    const newValue:NumMes={
                                                        ...mes,
                                                        hp:parseFloat(e.target.value)
                                                    }
                                                    return newValue;
                                                }
                                                return mes
                                            })})} value={form.meses[index].hp} type="number" />
                                        </td>
                                        <td className="p-4 text-center " >
                                            <input className="bg-transparent dark:text-gray-400"  onChange={(e)=>setForm({
                                                ...form,
                                                meses:form.meses.map((mes,i)=>{
                                                    if(i===index){
                                                        const newValue:NumMes={
                                                            ...mes,
                                                            hfp:parseFloat(e.target.value)
                                                        }
                                                        return newValue;
                                                    }
                                                    return mes;
                                                })
                                            })} value={form.meses[index].hfp} type="number" />
                                        </td>
                                    </tr>
                                        ))}
                            </tbody>
                        </table>
                        </div>
                        
                        <article className="flex justify-end pt-4">
                            <button type="submit" className="bg-green-600 flex items-center group py-2 px-4 text-white">
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