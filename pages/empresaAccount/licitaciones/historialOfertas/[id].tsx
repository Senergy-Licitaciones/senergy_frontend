import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import FormUpdateOferta from '../../../../components/common/FormUpdateOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
import { Oferta } from '../../../../types/data'
import { TypeToken } from '../../../../types/data/enums'
import { ErrorResponse } from '../../../../types/methods'
import { methodGetAuth } from '../../../../utils/fetch'
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
    const oferta = await methodGetAuth(`oferta/ofertaById/${params.id}`, data.accessToken) as Oferta|ErrorResponse
    if ('error' in oferta) throw new Error(oferta.message)
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
