import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import LicitacionDetails from '../../../../components/common/LicitacionDetails'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { getLicitacion } from '../../../../services/licitaciones'
import { Licitacion } from '@mytypes/models'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'

type Props={
    licitacion:Omit<Licitacion, 'usuario' | 'participantes'>
}
export default function LicitacionDetail ({ licitacion }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <LicitacionDetails licitacion={licitacion} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const param = ctx.params as {id:string}
    const licitacion = await getLicitacion(param.id, session.accessToken)
    return {
      props: {
        licitacion
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
