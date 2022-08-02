import { GetServerSideProps } from 'next'
import TableProveedoresToUser from '../../../components/common/TableProveedoresToUser'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { getProveedoresToUser } from '../../../services/proveedores'
import { InfoBasicaProveedor } from '@mytypes/models'
// eslint-disable-next-line camelcase
import { Session, unstable_getServerSession } from 'next-auth'
import { configNextAuth } from '@/pages/api/auth/[...nextauth]'
type Props={
  token:String,
  proveedores:InfoBasicaProveedor[]
}
export default function ListaProveedores ({ proveedores }:Props) {
  return (
        <LayoutUser>
            <section>
              <TableProveedoresToUser proveedores={proveedores} />
            </section>
        </LayoutUser>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    // const data = await getSession({ req: ctx.req })
    const session = await unstable_getServerSession(ctx.req, ctx.res, configNextAuth) as Session
    // if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    // if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario para acceder a este recurso')
    const proveedores = await getProveedoresToUser(session.accessToken)
    return {
      props: {
        token: session.accessToken,
        proveedores
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
