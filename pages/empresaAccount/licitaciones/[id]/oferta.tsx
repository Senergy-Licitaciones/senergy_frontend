import { GetServerSideProps } from 'next'
// eslint-disable-next-line camelcase
import FormCrearOferta from '../../../../components/common/FormCrearOferta'
import LayoutProveedor from '../../../../components/layout/layoutProveedor'
type Props={
    id:string
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
    return {
      props: {
        id
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
