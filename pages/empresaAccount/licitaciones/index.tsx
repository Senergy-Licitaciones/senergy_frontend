import LayoutProveedor from "../../../components/layout/layoutProveedor";
import TableLicitaciones from "../../../components/common/TableLicitaciones";
import { GetStaticProps } from "next";
import { methodGet } from "../../../utils/fetch";
import { Licitacion } from "../../../types/data";
type Props={
    licitaciones:Licitacion[]
}
export default function BuscadorLicitaciones({licitaciones}:Props){
    return(
        <LayoutProveedor>
            <section>
                <TableLicitaciones licitaciones={licitaciones} />
            </section>
        </LayoutProveedor>
    )
}
export const getStaticProps:GetStaticProps=async()=>{
    const licitaciones=await methodGet("licitacion/licitaciones");
    return{
        props:{
            licitaciones
        },
        revalidate:10
    }
}