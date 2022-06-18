import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import FormCrearOferta from '../../../../components/common/FormCrearOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { TypeToken } from '../../../../types/data/enums'
type Props={
    id:string,
    data:Session
}
export default function LicitacionOferta ({ id }:Props) {
  return (
        <LayoutProveedor>
            <section>
            <h1>Realizar oferta para Licitación {id} </h1>
            <FormCrearOferta idLicitacion={id} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as {id:string}
    const data = await getSession({ req: context.req })
    if (!data) throw new Error('Debe iniciar sesión primero para acceder a este recurso')
    if (data.user.tipo !== TypeToken.Proveedor) throw new Error('Debe iniciar sesión como proveedor para acceder a este recurso')
    return {
      props: {
        id,
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
