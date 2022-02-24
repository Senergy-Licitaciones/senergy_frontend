import { GetServerSideProps } from "next";
import LayoutUser from "../../../components/layout/layoutUser/LayoutUser";
export default function LicitacionDetail({id}:{id:string}):JSX.Element{
    return(
        <LayoutUser>
            <section>
                <h1 className="text-center text-2xl font-semibold">Detalle de Licitacion {id} </h1>
                <div className="flex flex-col">
                    <article className="flex justify-center my-4">
                <button className="bg-yellow-500 text-white py-2 px-4 rounded">Ver diagrama 01</button>

                    </article>
                    <article className="flex justify-center my-4">

                <button className="bg-yellow-500 text-white py-2 px-4 rounded">Ver diagrama 02</button>
                    </article>
                    <article className="flex justify-center my-4">

                <button className="bg-yellow-500 text-white py-2 px-4 rounded">Ver diagrama 03</button>
                    </article>
                <article className="flex justify-center my-4">
                <button className="py-2 px-4 bg-green-600 text-white rounded font-semibold">Descargar excel</button>

                </article>
                </div>
            </section>
        </LayoutUser>
    )
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    const {params}=context;
    return{
        props:{
            id:params.id
        }
    }
}