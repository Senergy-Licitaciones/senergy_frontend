import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import TableProveedoresToUser from '../../../components/common/TableProveedoresToUser'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'
import { InfoBasicaProveedor } from '../../../types/data'
import { TypeToken } from '../../../types/data/enums'
import { ErrorResponse } from '../../../types/methods'
import { methodGetAuth } from '../../../utils/fetch'
type Props={
  token:String,
  proveedores:InfoBasicaProveedor[]
}
export default function ProveedoresFrecuentes ({ proveedores }:Props) {
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
    const proveedores = await methodGetAuth('proveedor/getProveedoresToUser', data.accessToken) as InfoBasicaProveedor[]|ErrorResponse
    if ('error' in proveedores) throw new Error(proveedores.message)
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
