import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import FormUpdateOferta from '../../../../components/common/FormUpdateOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { getOferta } from '../../../../services/ofertas'
import { Oferta } from '../../../../types/models'
import { TypeToken } from '../../../../types/models/enums'

type Props={
    id:string,
    token:string,
    oferta:Oferta
}
export default function EditOferta ({ oferta }:Props) {
  return (
        <LayoutProveedor>
            <section>
                <h1>Editar Oferta</h1>
                <FormUpdateOferta oferta={oferta} />
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const params = context.params as {id:string}
    const data = await getSession({ req: context.req })
    if (!data) throw new Error('Debe iniciar sesión primero')
    if (data.user.tipo !== TypeToken.Proveedor) throw new Error('No tiene permisos para acceder a este recurso')
    const oferta = await getOferta(params.id, data.accessToken)
    return {
      props: {
        id: params.id,
        data,
        oferta
      }
    }
  } catch (err) {
    const error = err as Error
    return {
      redirect: {
        destination: '/login/empresa'
      },
      props: {
        error: error.message
      }
    }
  }
}
