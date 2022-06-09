import { GetServerSideProps } from "next";
import LayoutProveedor from "../../../../components/layout/layoutProveedor";
import { methodGetAuth } from "../../../../utils/fetch";
import { verifyToken } from "../../../../utils/handleJwt";
import { Oferta} from "../../../../types/data";
import { ErrorResponse } from "../../../../types/methods";
import TableOfertas from "../../../../components/common/TableOfertas";
type Props={
    ofertas:Oferta[]
}
export default function HistorialOfertas({ofertas}:Props){
    return(
        <LayoutProveedor>
            <section>
                <TableOfertas ofertas={ofertas} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try{
        const data = ctx.previewData as undefined | { token?:string };
        if (!data)throw new Error("Debe Iniciar Sesión");
        if(!data.token)throw new Error("Token no encontrado");
        const result =verifyToken(data.token);
        if (!result)throw new Error("Sesión expirada");
        if (result.type !== "proveedor")throw new Error("No tiene acceso a esta página")
        const ofertas = await methodGetAuth("oferta/showOfertas", data.token) as Oferta[]|ErrorResponse ;
        if("error" in ofertas)throw new Error(ofertas.message);
        return {
            props: {
                ofertas,
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