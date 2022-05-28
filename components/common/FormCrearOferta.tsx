import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FormCrearOfertaProveedor, HandleChange, HandleSubmit, HookCrearOferta } from "../../types/form";
import { useForm } from "../hooks/useForm";
import swal from "sweetalert";
import { methodPostAuth } from "../../utils/fetch";
import { ErrorResponse, Response } from "../../types/methods";
import Loader from "./Loader";
import { useRouter } from "next/router";
const initForm:FormCrearOfertaProveedor={
    potencia:0,
    energiaHp:0,
    energiaHfp:0,
    potenciaFacturar:"",
    formulaIndex:[],
    potMinFacturable:0,
    excesoPotencia:100

}
type Props={
    idLicitacion:string
}
export default function FormCrearOferta({idLicitacion}:Props){
    const {form,handleChange,setForm,setLoading,loading}=useForm(initForm) as HookCrearOferta ;
    const [index,setIndex]=useState<string>("");
    const {push}=useRouter();
    const handleChangeIndex:HandleChange=(e)=>{
        const{value}=e.target;
        setIndex(value);
    }
    const handleSubmit:HandleSubmit=async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            const data=await methodPostAuth("proveedor/crearOferta",localStorage.getItem("tokenLoginProveedor"),{...form,idLicitacion}) as Response|ErrorResponse ;
            setLoading(false);
            if("error" in data){
                console.log("data ",data);
                swal(data.message,data.error.toString(),"error");
            }else{
                swal("Operación exitosa",data.message,"success").then(()=>push("/empresaAccount/licitaciones"));
            }
        }catch(err){
            console.log("error ",err);
            setLoading(false);
            swal("Ha ocurrido un error","Revise el formulario y vuelva a intentarlo","error");
        }
    }
    const generarFormula=()=>{
        setForm({
            ...form,
            formulaIndex:[...form.formulaIndex,{index,factor:0}]
        })
    }
    return(
        <form onSubmit={handleSubmit} >

        <div className={`bg-white p-4 dark:bg-gray-900 block`}>
                        <article className="flex items-center">
                        <p className="font-semibold dark:text-gray-400">Generar oferta</p>
                        <span className="flex ml-2 items-center cursor-pointer dark:text-gray-400 2xl:text-2xl text-xl" >
                            <AiOutlineQuestionCircle/>
                        </span>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potencia">Potencia</label>
                            <input onChange={handleChange} value={form.potencia} name="potencia" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar potencia" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="energiaHp">Energía Horas Punta</label>
                            <input onChange={handleChange} value={form.energiaHp} name="energiaHp" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Punta" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="energiaHfp">Energía Horas Fuera de Punta</label>
                            <input onChange={handleChange} value={form.energiaHfp} name="energiaHfp" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Fuera de Punta" type="number" />
                        </article>
                       
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="potenciaFacturar">Potencia a Facturar</label>
                            <select onChange={handleChange} value={form.potenciaFacturar} className="dark:bg-gray-800 dark:text-gray-400" name="potenciaFacturar" id="">
                                <option value="">-Seleccionar potencia a facturar-</option>
                                <option value={"MD en Horas Puntas del Mes"}>MD en Horas Puntas del Mes</option>
                                <option value={"Demanda coincidente con la Máxima"}>Demanda coincidente con la Máxima</option>
                                <option value={"MD en Horas de Punta personalizada"}>MD en Horas de Punta personalizada</option>
                            </select>
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor="index">Fórmula de Indexación</label>
                            <select onChange={handleChangeIndex} value={index} className="dark:bg-gray-800 dark:text-gray-400" name="index" id="">
                                <option value="">-Seleccionar un índice-</option>
                                <option value="PPI">PPI</option>
                                <option value="PGN">PGN</option>
                                <option value="PG">PG</option>
                            </select>
                            <span onClick={generarFormula} className="bg-sky-600 block cursor-pointer py-2 px-4 text-white" >Agregar índice</span>
                            {form.formulaIndex.map((el,i)=>(
                                <article className="flex flex-col my-4" >
                                   <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg " htmlFor={el.index}>{el.index}</label>
                                    <input onChange={(e)=>setForm({
                                        ...form,
                                        formulaIndex:form.formulaIndex.map((elemento,pos)=>{
                                            if(pos===i){
                                                return{
                                                    ...elemento,
                                                    factor:parseFloat(e.target.value)
                                                }
                                            }
                                            return elemento
                                        })
                                    })} value={form.formulaIndex[i].factor} name={el.index} className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Energía en Horas Fuera de Punta" type="number" />
                                </article>
                            ))}
                        </article>
                        
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="potMinFacturable">Potencia Mínima Facturable</label>
                            <input onChange={handleChange} value={form.potMinFacturable} name="potMinFacturable" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage Potencia Mínima Facturable" type="number" />
                        </article>
                        <article className="flex flex-col my-4">
                            <label className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-lg" htmlFor="excesoPotencia">Exceso de Potencia</label>
                            <input onChange={handleChange} value={form.excesoPotencia} name="excesoPotencia" className="rounded dark:bg-gray-800 dark:text-gray-400 2xl:placeholder:text-lg placeholder:text-sm " placeholder="Agregar Porcentage MDC" type="number" />
                        </article>
                        <article className="flex justify-end pt-4">
                            {
                                loading?
                                <Loader/>
                                :
                            <button type="submit" className="bg-green-600 py-2 px-4 text-white">Enviar</button>
                            }
                        </article>
                    </div>
        </form>
    )
}