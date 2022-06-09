import { GetServerSideProps } from "next";
import TableLicitacionesUser from "../../../components/common/TableLicitacionesUser";
import LayoutUser from "../../../components/layout/layoutUser/LayoutUser";
import { Licitacion, TokenUser } from "../../../types/data";
import { TypeToken } from "../../../types/data/enums";
import { ErrorResponse } from "../../../types/methods";
import { methodGetAuth } from "../../../utils/fetch";
import { verifyToken } from "../../../utils/handleJwt";
type Props={
    token:string,
    licitaciones:Array<Licitacion>
}
export default function UserLicitaciones({licitaciones}:Props):JSX.Element{
    return(
        <LayoutUser>
            <section>
                <TableLicitacionesUser licitaciones={licitaciones} />
            </section>
        </LayoutUser>
    )
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    try{
        const data=context.previewData as {token:string}|undefined;
        if(!data)throw new Error("Debe iniciar sesión para acceder a este recurso");
        const payload=verifyToken(data.token) as TokenUser ;
        if(!payload)throw new Error("Token inválido");
        if(payload.type!==TypeToken.User)throw new Error("Debe iniciar sesión como usuario primero");
        const licitaciones=await methodGetAuth("user/getLicitaciones",data.token) as ErrorResponse|Array<Licitacion> ;
        if("error" in licitaciones) throw new Error(licitaciones.message);
        return{
                props:{
                    token:data.token,
                    licitaciones
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