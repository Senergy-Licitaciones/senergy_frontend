import { Dispatch, SetStateAction } from "react"

type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>
}
export default function AsideSteper({step,setStep}:Props){
    return(
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
                                <p className={`text-sm dark:text-gray-400 ${step===3?"text-black font-bold":"text-gray-500"}`}>Especificaciones Técnicas</p>
                            </div>
                        </li>
                        <li className="flex">
                            <article className="flex flex-col items-center">
                                <span onClick={()=>setStep(4)} className={`cursor-pointer block w-4 h-4 rounded-full ${step>=4?"bg-green-500 ":"dark:bg-gray-900 bg-gray-300"} `} ></span>
                            </article>
                            <div className="ml-4">
                                <p className="font-semibold dark:text-gray-400 text-sm text-gray-500">Paso 04</p>
                                <p className={`text-sm dark:text-gray-400 ${step===4?"text-black font-bold ":"text-gray-500"}`}>Especificación por Mes</p>
                            </div>
                        </li>
                    </ul>
                </aside>
    )
}