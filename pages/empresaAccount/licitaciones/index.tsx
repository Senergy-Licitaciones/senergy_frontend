import LayoutProveedor from "../../../components/layout/layoutProveedor";
import TableLicitaciones from "../../../components/common/TableLicitaciones";
import { GetServerSideProps } from "next";
import { methodGetAuth } from "../../../utils/fetch";
import { Licitacion } from "../../../types/data";
import { verifyToken } from "../../../utils/handleJwt";
import { TypeToken } from "../../../types/data/enums";
import { ErrorResponse } from "../../../types/methods";
type Props = {
    licitaciones: Licitacion[],
    token: string
}
export default function BuscadorLicitaciones({ licitaciones}: Props) {
    return (
        <LayoutProveedor>
            <section>
                <TableLicitaciones licitaciones={licitaciones} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try{
        const data = ctx.previewData as undefined | { token?: string };
        if (!data) throw new Error("Debe iniciar sesión primero para acceder a este recurso");
        if(!data.token)throw new Error("Token no encontrado, vuelva a iniciar sesión por la plataforma");
        const result =verifyToken(data.token);
        if (!result) throw new Error("Token inválido");
        if (result.type !==TypeToken.Proveedor) throw new Error("Debe iniciar sesión como proveedor para acceder a este recurso");
        const licitaciones = await methodGetAuth("licitacion/licitacionesLibres", data.token) as Licitacion[]|ErrorResponse;
        if("error" in licitaciones)throw new Error(licitaciones.message);
        return {
            props: {
                licitaciones,
                token: data.token
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