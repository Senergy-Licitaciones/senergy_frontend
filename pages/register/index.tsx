import LayoutHome from '../../components/layout'
import FormUserRegister from '../../components/common/FormUserRegister'
export default function RegisterUser () {
  return (
        <LayoutHome>
            <section className="p-8">
                <div className="shadow-2xl overflow-hidden flex rounded-xl ">
                    <FormUserRegister/>
                    <span className=" hidden md:flex flex-1" >
                        <img className="w-full h-auto" src="https://media.istockphoto.com/photos/pylon-picture-id661805558?k=20&m=661805558&s=612x612&w=0&h=Co2VIXzP1r7nP_C1gBfnjglEGaFmEiXl7s8h4BZhYjo=" alt="empresa registro" />
                    </span>
                </div>
            </section>
        </LayoutHome>
  )
}
