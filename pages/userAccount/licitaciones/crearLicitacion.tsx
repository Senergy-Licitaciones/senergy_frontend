import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import SteperCrearLicitacion from '../../../components/common/SteperCrearLicitacion'
import LayoutUser from '../../../components/layout/layoutUser/LayoutUser'

export default function CrearLicitacion () {
  return (
        <LayoutUser>
            <section className="flex 2xl:text-2xl md:flex-row flex-col">
                <SteperCrearLicitacion />
            </section>
        </LayoutUser>
  )
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const data = await getSession({ req: context.req })
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    return {
      props: {
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
        destination: '/login',
        permanent: false
      }
    }
  }
}
