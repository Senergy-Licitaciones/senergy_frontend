import FormEmpresaLogin from "../../components/common/FormEmpresaLogin";
import LayoutHome from "../../components/layout";
export default function LoginEmpresa():JSX.Element{
    
    return(
        <LayoutHome>
            <section className="flex min-h-screen p-4 justify-around items-center ">
            <span className="hidden md:flex">
                <img className="2xl:w-[60rem] h-auto" src="https://media.istockphoto.com/vectors/flat-design-concept-of-meeting-business-presentation-training-annual-vector-id1162009708?k=20&m=1162009708&s=612x612&w=0&h=_ZoT-71l7RyDyPXl6DVT3eLYvPzg_S643MMTwmFYBQ4=" alt="login user"/>
            </span>
            <FormEmpresaLogin/>
        </section>
        </LayoutHome>
       
    )
}