import { GetServerSideProps } from 'next'
import LayoutProveedor from '../../components/layout/layoutProveedor'
import { verifyToken } from '../../utils/handleJwt'

export default function HomeProveedor () {
  return (
        <LayoutProveedor>
            <section>
                <h1 className="text-center dark:text-gray-400 text-2xl" >Bienvenido al panel de proveedores</h1>
            </section>
        </LayoutProveedor>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx) => {
  try {
    const data = ctx.previewData as undefined|{token?:string}
    if (!data) throw new Error('Debe iniciar sesión para acceder a este recurso')
    if (!data.token) throw new Error('Token no encontrado, vuelva a iniciar sesión en la plataforma')
    console.log('antes del verify ', data)
    const result = verifyToken(data.token)
    if (!result) throw new Error('Token inválido')
    if (result.type !== 'proveedor') throw new Error('Debe iniciar sesión como proveedor para acceder a este recurso')
    return {
      props: {
        token: data.token
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
