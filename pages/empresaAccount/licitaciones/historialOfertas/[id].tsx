import { GetServerSideProps } from "next";
import FormUpdateOferta from "../../../../components/common/FormUpdateOferta";
import LayoutProveedor from "../../../../components/layout/layoutProveedor";
import { Oferta } from "../../../../types/data";
import { ErrorResponse } from "../../../../types/methods";
import { methodGetAuth } from "../../../../utils/fetch";
import { verifyToken } from "../../../../utils/handleJwt";
type Props={
    id:string,
    token:string,
    oferta:Oferta
}
export default function EditOferta({oferta}:Props){
    return(
        <LayoutProveedor>
            <section>
                <h1>Editar Oferta</h1>
                <FormUpdateOferta oferta={oferta} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    try{
        const params=context.params as {id:string},
        data=context.previewData as undefined|{token:string};
        if(!data) throw new Error("Debe iniciar sesión primero");
        const result=verifyToken(data.token);
        if(!result)throw new Error("Sesión expirada, vuelva a iniciar sesión");
        if(result.type!=="proveedor")throw new Error("No tiene permisos para acceder a este recurso");
        const oferta=await methodGetAuth(`oferta/ofertaById/${params.id}`,data.token) as Oferta|ErrorResponse ;
        if("error" in oferta)throw new Error(oferta.message);
        return{
            props:{
                id:params.id,
                token:data.token,
                oferta
            }
        }
    }catch(err){
        let error=err as Error;
        return{
            redirect:{
                destination:"/login/empresa"
            },
            props:{
                error:error.message
            }
        }
    }
}