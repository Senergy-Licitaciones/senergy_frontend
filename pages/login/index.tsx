import Image from "next/image";
import FormUserLogin from "../../components/common/FormUserLogin";
import LayoutHome from "../../components/layout";

export default function LoginUser():JSX.Element{
    
    return(
        <LayoutHome>

        <section className="flex min-h-screen p-4 justify-center items-center md:justify-around ">
            <span className=" hidden md:flex ">
                    <img className="w-64 2xl:[40rem] h-auto" src="https://cdn.pixabay.com/photo/2018/03/21/06/30/people-3245739__480.png" alt="login usuario senergy" />
            </span>
            <FormUserLogin/>
        </section>
        </LayoutHome>
    )
}