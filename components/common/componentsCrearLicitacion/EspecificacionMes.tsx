import { Dispatch, SetStateAction } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FormCrearLicitacionUser, NumMes } from "../../../types/form";
import Loader from "../Loader";
type Props={
    step:number,
    form:FormCrearLicitacionUser,
    setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>,
    loading:boolean,
    setLoading:Dispatch<SetStateAction<boolean>>
}
export default function EspecificacionMes({step,form,setForm,loading}:Props){
    return(
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
                            {
                                loading?
                                <Loader/>
                                :
                            <button type="submit" className="bg-green-600 flex items-center group py-2 px-4 text-white">
                                <span className="flex items-center transition-all duration-300 text-2xl mr-4 group-hover:animate-bounce justify-center" >
                                    <AiFillCheckCircle/>
                                </span>
                                <p>Crear licitación</p>
                            </button>
                            }
                        </article>
                    </div>
    )
}