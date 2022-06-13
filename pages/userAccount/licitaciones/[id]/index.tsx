import { GetServerSideProps } from "next";
import LicitacionDetails from "../../../../components/common/LicitacionDetails";
import LayoutUser from "../../../../components/layout/layoutUser/LayoutUser";
import { Licitacion, TokenUser } from "../../../../types/data";
import { TypeToken } from "../../../../types/data/enums";
import { ErrorResponse } from "../../../../types/methods";
import { methodGetAuth } from "../../../../utils/fetch";
import { verifyToken } from "../../../../utils/handleJwt";
type Props={
    licitacion:Omit<Licitacion,"usuario"|"participantes">,
    token:string
}
export default function LicitacionView({licitacion}:Props){
    return(
        <LayoutUser>
            <section>
                <LicitacionDetails licitacion={licitacion} />
            </section>
        </LayoutUser>
    )
}
export const getServerSideProps:GetServerSideProps=async(ctx)=>{
    try{
        const data=ctx.previewData as undefined|{token?:string};
        const {id}=ctx.params as {id:string};
        if(!data)throw new Error("Debe iniciar sesión primero para acceder a este recurso");
        if(!data.token) throw new Error("Token no encontrado, iniciar sesión de nuevo por favor!");
        const payload=verifyToken(data.token) as TokenUser|null;
        if(!payload)throw new Error("Token inválido");
        if(payload.type!==TypeToken.User)throw new Error("Debe iniciar sesión como usuario para acceder a este recurso");
        const licitacion=await methodGetAuth(`licitacion/licitacionId/${id}`,data.token) as ErrorResponse|Omit<Licitacion,"usuario"|"participantes"> 
        if("error" in licitacion)throw new Error(licitacion.message);
        return{
            props:{
                licitacion,
                token:data.token
            }
        }
    }catch(err){
        let error=err as Error;
        console.log("error ",err);
        return{
            props:{
                error:error.message
            },
            redirect:{
                destination:"/login"
            }
        }
    }
}