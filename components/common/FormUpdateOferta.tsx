import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HandleChange, HandleSubmit, HookCrearOferta } from "../../types/form";
import { useForm } from "../hooks/useForm";
import swal from "sweetalert";
import {  methodPutAuth } from "../../utils/fetch";
import { ErrorResponse, Response } from "../../types/methods";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { Oferta } from "../../types/data";
type Props={
    oferta:Oferta
}
export default function FormUpdateOferta({oferta}:Props){
    console.log("oferta ",oferta );
    const {form,handleChange,setForm,setLoading,loading}=useForm({
        potencia:oferta.potencia,
        energiaHp:oferta.energiaHp,
    energiaHfp:oferta.energiaHfp,
    potenciaFacturar:oferta.potenciaFacturar,
    formulaIndexPotencia:oferta.formulaIndexPotencia,
    formulaIndexEnergia:oferta.formulaIndexEnergia,
    potMinFacturable:oferta.potMinFacturable,
    excesoPotencia:oferta.excesoPotencia

    }) as HookCrearOferta ;
    const [index,setIndex]=useState({
        potencia:"",
        energia:""
    });
    const {push}=useRouter();
    const handleChangeIndex:HandleChange=(e)=>{
        const{value,name}=e.target;
        name==="formulaIndexPotencia"?
        setIndex({
            ...index,
            potencia:value
        })
        :
        setIndex({
            ...index,
            energia:value
        });
    }
    const handleSubmit:HandleSubmit=async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            const data=await methodPutAuth(`oferta/editOferta/${oferta._id}`,localStorage.getItem("tokenLoginProveedor"),form) as Response|ErrorResponse ;
            setLoading(false);
            if("error" in data){
                console.log("data ",data);
                swal(data.message,data.error.toString(),"error");
            }else{
                swal("Operación exitosa",data.message,"success").then(()=>push("/empresaAccount/licitaciones/historialOfertas"));
            }
        }catch(err){
            console.log("error ",err);
            setLoading(false);
            swal("Ha ocurrido un error","Revise el formulario y vuelva a intentarlo","error");
        }
    }
    const generarFormulaPotencia=()=>{
        setForm({
            ...form,
            formulaIndexPotencia:[...form.formulaIndexPotencia,{index:index.potencia,factor:0}]
        })
    }
    const generarFormulaEnergia=()=>{
        setForm({
            ...form,
            formulaIndexEnergia:[...form.formulaIndexEnergia,{index:index.energia,factor:0}]
        })
    }
    return(
        <form onSubmit={handleSubmit} >

        <div className={`bg-white p-4 dark:bg-gray-900 block`}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Editar oferta</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potencia">Potencia</label>
                            <div className="flex" >
                            <input onChange={handleChange} value={form.potencia} name="potencia" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar potencia" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >US$/kW</span>
                            </div>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="energiaHp">Energía Horas Punta</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.energiaHp} name="energiaHp" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Punta" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >US$/MWH</span>
                            </div>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="energiaHfp">Energía Horas Fuera de Punta</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.energiaHfp} name="energiaHfp" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Fuera de Punta" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >US$/MWH</span>
                            </div>
                        </article>
                       
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="potenciaFacturar">Potencia a Facturar</label>
                            <select onChange={handleChange} value={form.potenciaFacturar} className="dark:bg-gray-800 dark:text-gray-400" name="potenciaFacturar" id="">
                                <option value="">-Seleccionar potencia a facturar-</option>
                                <option value={"MD en Horas Puntas del Mes"}>MD en Horas Puntas del Mes</option>
                                <option value={"Demanda coincidente con la Máxima"}>Demanda coincidente con la Máxima Demanda del SINEI</option>
                                <option value={"MD en Horas de Punta personalizada"}>MD en Horas de Punta personalizada</option>
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="formulaIndexPotencia">Fórmula de Indexación para Potencia</label>
                            <select onChange={handleChangeIndex} value={index.potencia} className="dark:bg-gray-800 dark:text-gray-400" name="formulaIndexPotencia" id="">
                                <option value="">-Seleccionar un índice-</option>
                                <option value="PPI">PPI</option>
                                <option value="PGN">PGN</option>
                                <option value="PG">PG</option>
                            </select>
                            <span onClick={generarFormulaPotencia} className="bg-sky-600 block cursor-pointer py-2 px-4 text-white" >Agregar índice</span>
                            {form.formulaIndexPotencia.map((el,i)=>(
                                <article className="flex flex-col my-4" >
                                   <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor={el.index}>{el.index}</label>
                                   

                                    <input onChange={(e)=>setForm({
                                        ...form,
                                        formulaIndexPotencia:form.formulaIndexPotencia.map((elemento,pos)=>{
                                            if(pos===i){
                                                return{
                                                    ...elemento,
                                                    factor:parseFloat(e.target.value)
                                                }
                                            }
                                            return elemento
                                        })
                                    })} value={form.formulaIndexPotencia[i].factor} name={el.index} className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar factor" type="number" />
                                    
                                    
                                </article>
                            ))}
                        </article>
                        
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="formulaIndexEnergia">Fórmula de Indexación para Energía</label>
                            <select onChange={handleChangeIndex} value={index.energia} className="dark:bg-gray-800 dark:text-gray-400" name="formulaIndexEnergia" id="">
                                <option value="">-Seleccionar un índice-</option>
                                <option value="PPI">PPI</option>
                                <option value="PGN">PGN</option>
                                <option value="PG">PG</option>
                            </select>
                            <span onClick={generarFormulaEnergia} className="bg-sky-600 block cursor-pointer py-2 px-4 text-white" >Agregar índice</span>
                            {form.formulaIndexEnergia.map((el,i)=>(
                                <article className="flex flex-col my-4" >
                                   <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor={el.index}>{el.index}</label>
                                   

                                    <input onChange={(e)=>setForm({
                                        ...form,
                                        formulaIndexEnergia:form.formulaIndexEnergia.map((elemento,pos)=>{
                                            if(pos===i){
                                                return{
                                                    ...elemento,
                                                    factor:parseFloat(e.target.value)
                                                }
                                            }
                                            return elemento
                                        })
                                    })} value={form.formulaIndexEnergia[i].factor} name={el.index} className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar factor" type="number" />
                                    
                                    
                                </article>
                            ))}
                        </article>

                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potMinFacturable">Potencia Mínima Facturable</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.potMinFacturable} name="potMinFacturable" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage Potencia Mínima Facturable" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >0% - 100%</span>
                            </div>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="excesoPotencia">Exceso de Potencia</label>
                            <div className="flex">
                            <input onChange={handleChange} value={form.excesoPotencia} name="excesoPotencia" className="rounded flex-1 dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage MDC" type="number" />
                            <span className="flex bg-gray-200 px-2 items-center" >100% - 200%</span>
                            </div>
                        </article>
                        <article className="flex justify-end pt-4">
                            {
                                loading?
                                <Loader/>
                                :
                            <button type="submit" className="bg-green-600 py-2 px-4 text-white">Actualizar</button>
                            }
                        </article>
                    </div>
        </form>
    )
}