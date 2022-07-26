import LayoutProveedor from '../../../components/layout/layoutProveedor'
import TableLicitaciones from '../../../components/common/TableLicitaciones'
import { GetServerSideProps } from 'next'
import { Licitacion } from '../../../types/models'
import { TypeToken } from '../../../types/models/enums'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { getLicitacionesLibres } from '../../../services/licitaciones'
type Props = {
    licitaciones: Licitacion[],
    data: Session
}
export default function BuscadorLicitaciones ({ licitaciones }: Props) {
  return (
        <LayoutProveedor>
            <section>
                <TableLicitaciones licitaciones={licitaciones} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const data = await getSession({ req: ctx.req })
    if (!data) throw new Error('Debe iniciar sesión primero para acceder a este recurso')
    if (data.user.tipo !== TypeToken.Proveedor) throw new Error('Debe iniciar sesión como proveedor para acceder a este recurso')
    const licitaciones = await getLicitacionesLibres(data.accessToken)
    return {
      props: {
        licitaciones,
        data
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      },
      redirect: {
        destination: '/login/empresa'
      }
    }
  }
}
