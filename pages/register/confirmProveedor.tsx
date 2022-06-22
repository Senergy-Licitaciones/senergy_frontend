import ConfirmProveedorForm from '../../components/common/ConfirmProveedorForm'
import LayoutHome from '../../components/layout/index'

export default function ConfirmProveedor () {
  return (
        <LayoutHome>
            <section className="flex justify-center min-h-screen items-center" >
                <ConfirmProveedorForm/>
            </section>
        </LayoutHome>
  )
}
