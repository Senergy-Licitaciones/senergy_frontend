import LayoutProveedor from '../../../components/layout/layoutProveedor'
import TableLicitaciones from '../../../components/common/TableLicitaciones'
import { GetServerSideProps } from 'next'
import { methodGetAuth } from '../../../utils/fetch'
import { Licitacion } from '../../../types/data'
import { TypeToken } from '../../../types/data/enums'
import { ErrorResponse } from '../../../types/methods'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'
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
    const licitaciones = await methodGetAuth('licitacion/licitacionesLibres', data.accessToken) as Licitacion[]|ErrorResponse
    if ('error' in licitaciones) throw new Error(licitaciones.message)
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
