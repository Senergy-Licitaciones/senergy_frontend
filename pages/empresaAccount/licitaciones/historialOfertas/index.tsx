import { GetServerSideProps } from 'next'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import TableOfertas from '../../../../components/common/TableOfertas'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { getOfertas } from '../../../../services/ofertas'
import { createOfertaAdapter } from '@/adapters'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
type Props={
    ofertas:any[]
}
export default function HistorialOfertas ({ ofertas }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <TableOfertas ofertas={ofertas.map((oferta) => createOfertaAdapter(oferta))} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const ofertas = await getOfertas(session.accessToken)
    return {
      props: {
        ofertas
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      props: {
        message: error.message
      }
    }
  }
}
