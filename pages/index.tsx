import { useRouter } from "next/router";
import LayoutHome from "../components/layout";

export default function Home():JSX.Element{
    const {push}=useRouter();
    return(
       <LayoutHome>
           <section className=" min-h-screen flex justify-center items-center snap-center">
               <div className="flex flex-col max-w-4xl">
                   <h1 className=" text-5xl sm:text-6xl font-extrabold text-center">Encuentra el <p className="text-yellow-400">suministro de energía 
                       </p> adecuado para ti</h1>
                 
                   <p className=" text-md sm:text-xl text-center my-4 text-gray-400 font-semibold">Genera licitaciones para suministros de energía eléctrica de más de 2000 proveedores, de forma rápida y segura </p>
                    <article className="flex p-4 flex-col sm:flex-row justify-center">
                        <button onClick={()=>push("/login")} className=" mb-4 sm:mb-0 py-4 mr-2 px-8 bg-yellow-400 text-white rounded-lg text-xl font-bold">Iniciar como usuario</button>
                        <button onClick={()=>push("/login/empresa")} className="py-4 ml-2 px-8 shadow-2xl text-yellow-400 rounded-lg font-bold text-xl">¿Eres un proveedor?</button>
                    </article>
               </div>
           </section>
       </LayoutHome>
    )
}