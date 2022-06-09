import { GetServerSideProps } from "next";
import FormCrearOferta from "../../../../components/common/FormCrearOferta";
import LayoutProveedor from "../../../../components/layout/layoutProveedor";
import { TypeToken } from "../../../../types/data/enums";
import { verifyToken } from "../../../../utils/handleJwt";
type Props={
    id:string,
    token:string
}
export default function LicitacionOferta({id}:Props){
  
    return(
        <LayoutProveedor>
            <section>
            <h1>Realizar oferta para Licitación {id} </h1>
            <FormCrearOferta idLicitacion={id} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    try{
        const {id}=context.params as {id:string},
        data=context.previewData as undefined|{token?:string};
        if(!data)throw new Error("Debe iniciar sesión primero para acceder a este recurso");
        if(!data.token)throw new Error("Token no encontrado, debe iniciar sesión por la plataforma");
        const result=verifyToken(data.token);
        if(!result)throw new Error("Token inválido");
        if(result.type!==TypeToken.Proveedor)throw new Error("Debe iniciar sesión como proveedor para acceder a este recurso");
        return{
            props:{
                id,
                token:data.token
            }
        }
    }catch(err){
        let error=err as Error;
        return{
            props:{
                error:error.message
            },
            redirect:{
                destination:"/login/empresa"
            }
        }
    }
}