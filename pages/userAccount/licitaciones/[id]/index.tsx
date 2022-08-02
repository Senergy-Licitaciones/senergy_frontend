import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import LicitacionDetails from '../../../../components/common/LicitacionDetails'
import LayoutUser from '../../../../components/layout/layoutUser/LayoutUser'
import { getLicitacion } from '../../../../services/licitaciones'
import { Licitacion } from '@mytypes/models'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
type Props={
    licitacion:Omit<Licitacion, 'usuario'|'participantes'>
}
export default function LicitacionView ({ licitacion }:Props) {
  return (
        <LayoutUser>
            <section>
                <LicitacionDetails licitacion={licitacion} />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const { id } = ctx.params as {id:string}
    const licitacion = await getLicitacion(id, session.accessToken)
    return {
      props: {
        licitacion
      }
    }
  } catch (err) {
    const error = err as Error
    console.log('error ', err)
    return {
      props: {
        error: error.message
      }
    }
  }
}
