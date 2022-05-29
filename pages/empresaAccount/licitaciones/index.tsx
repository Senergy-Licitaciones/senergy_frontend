import LayoutProveedor from "../../../components/layout/layoutProveedor";
import TableLicitaciones from "../../../components/common/TableLicitaciones";
import { GetServerSideProps } from "next";
import { methodGet, methodGetAuth } from "../../../utils/fetch";
import { Licitacion } from "../../../types/data";
import { verifyToken } from "../../../utils/handleJwt";
type Props = {
    licitaciones: Licitacion[],
    token: string
}
export default function BuscadorLicitaciones({ licitaciones, token }: Props) {
    return (
        <LayoutProveedor>
            <section>
                <TableLicitaciones licitaciones={licitaciones} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = ctx.previewData as undefined | { token?: string };
    if (!data) return {
        props: {},
        redirect: {
            destination: "/login/empresa"
        }
    }
    const result = await verifyToken(data.token);
    if (!result) return {
        props: {},
        redirect: {
            destination: "/login/empresa"
        }
    }
    if (result.type !== "proveedor") return {
        props: {},
        redirect: {
            destination: "/userAccount"
        }
    }
    const licitaciones = await methodGetAuth("licitacion/licitacionesLibres", data.token);
    return {
        props: {
            licitaciones,
            token: data.token
        }
    }
}