import LayoutHome from '../../components/layout'
import FormEmpresaRegister from '../../components/common/FormEmpresaRegister'
export default function RegisterEmpresa () {
  return (
        <LayoutHome>
            <section className="p-8">
                <div className="shadow-2xl flex rounded-xl overflow-hidden">
                    <FormEmpresaRegister/>
                    <span className="hidden md:flex flex-1" >
                        <img className="w-full h-auto" src="https://media.istockphoto.com/photos/looking-directly-up-at-the-skyline-of-the-financial-district-in-picture-id1215119911?k=20&m=1215119911&s=612x612&w=0&h=xnJVMO0gPzC1Joa9bTzVOQn74dmh6vWeIntDag7I3jQ=" alt="empresa registro" />
                    </span>
                </div>
            </section>
        </LayoutHome>
  )
}
