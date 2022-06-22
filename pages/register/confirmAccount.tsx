import ConfirmAccountForm from '../../components/common/ConfirmAccountForm'
import LayoutHome from '../../components/layout'

export default function ConfirmAccount () {
  return (
        <LayoutHome>
            <section className="flex justify-center min-h-screen items-center" >

            <ConfirmAccountForm/>
            </section>
        </LayoutHome>
  )
}
