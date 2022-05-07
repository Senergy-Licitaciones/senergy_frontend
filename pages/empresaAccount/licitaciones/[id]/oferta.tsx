import { GetServerSideProps } from "next";
import FormCrearOferta from "../../../../components/common/FormCrearOferta";
import LayoutProveedor from "../../../../components/layout/layoutProveedor";

export default function LicitacionOferta({id}){
  
    return(
        <LayoutProveedor>
            <section>
            <h1>Realizar oferta para Licitación {id} </h1>
            <FormCrearOferta/>
            </section>
        </LayoutProveedor>
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