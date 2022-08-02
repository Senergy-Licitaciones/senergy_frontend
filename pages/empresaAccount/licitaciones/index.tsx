import LayoutProveedor from '../../../components/layout/layoutProveedor'
import TableLicitaciones from '../../../components/common/TableLicitaciones'
import { GetServerSideProps } from 'next'
import { Licitacion } from '@mytypes/models'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { getLicitacionesLibres } from '../../../services/licitaciones'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
type Props = {
    licitaciones: Licitacion[]
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
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const licitaciones = await getLicitacionesLibres(session.accessToken)
    return {
      props: {
        licitaciones
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        error: error.message
      }
    }
  }
}
