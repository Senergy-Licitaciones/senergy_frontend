import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import TableLicitacionesUser from '../../../components/common/TableLicitacionesUser'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { getLicitaciones } from '../../../services/users'
import { Licitacion } from '@mytypes/models'
import { createLicitacionesAdapter } from '@/adapters'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
type Props={
    licitaciones:Array<Omit<Licitacion, 'puntoSum'|'brg'|'tipoServicio'|'createdAt'|'updatedAt'>&{createdAt:string, updatedAt:string}>
}
export default function UserLicitaciones ({ licitaciones }:Props) {
  return (
        <LayoutUser>
            <section>
                <TableLicitacionesUser licitaciones={createLicitacionesAdapter(licitaciones)} />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    const licitaciones = await getLicitaciones(session.accessToken)
    console.log(licitaciones)
    return {
      props: {
        licitaciones
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
