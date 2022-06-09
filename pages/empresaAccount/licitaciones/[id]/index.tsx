import { GetServerSideProps } from "next";
import LicitacionDetails from "../../../../components/common/LicitacionDetails";
import LayoutProveedor from "../../../../components/layout/layoutProveedor";
import { Licitacion } from "../../../../types/data";
import { ErrorResponse } from "../../../../types/methods";
import { methodGetAuth } from "../../../../utils/fetch";
import { verifyToken } from "../../../../utils/handleJwt";
type Props={
    licitacion:Omit<Licitacion,"usuario" | "participantes">,
    token:string
}
export default function LicitacionDetail({licitacion}:Props){
    return(
        <LayoutProveedor>
            <section>
                <LicitacionDetails licitacion={licitacion} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try{
        const data = ctx.previewData as undefined | { token?: string };
        const param=ctx.params as {id:string};
        if (!data)throw new Error("Debe Iniciar Sesión");
        if(!data.token)throw new Error("Token no encontrado");
        const result = await verifyToken(data.token);
        if (!result)throw new Error("Sesión expirada");
        if (result.type !== "proveedor")throw new Error("No tiene acceso a esta página")
        const licitacion = await methodGetAuth(`licitacion/licitacionId/${param.id}`, data.token) as Omit<Licitacion,"usuario" | "participantes">|ErrorResponse ;
        if("error" in licitacion)throw new Error(licitacion.message);
        return {
            props: {
                licitacion,
                token: data.token
            }
        }
    }catch(err){
        let error=err as Error;
        return{
            props:{
                message:error.message
            },
            redirect:{
                destination:"/login/empresa",

            }
        }
    }
}