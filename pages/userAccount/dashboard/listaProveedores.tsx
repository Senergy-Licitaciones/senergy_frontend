import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import TableProveedoresToUser from '../../../components/common/TableProveedoresToUser'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { getProveedoresToUser } from '../../../services/proveedores'
import { InfoBasicaProveedor } from '../../../types/models'
import { TypeToken } from '../../../types/models/enums'
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
    const data = await getSession({ req: ctx.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (data.user.tipo !== TypeToken.User) throw new Error('Debe iniciar sesión como usuario para acceder a este recurso')
    const proveedores = await getProveedoresToUser(data.accessToken)
    return {
      props: {
        token: data.accessToken,
        proveedores
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      redirect: {
        destination: '/login',
        permanent: false
      },
      props: {
        error: error.message
      }
    }
  }
}
