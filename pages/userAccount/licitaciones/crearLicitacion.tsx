import { GetStaticProps } from "next";
import SteperCrearLicitacion from "../../../components/common/SteperCrearLicitacion";
import LayoutUser from "../../../components/layout/layoutUser/LayoutUser";
type Props={
    token:string
}
export default function CrearLicitacion({token}:Props):JSX.Element{
    return(
        <LayoutUser>
            <section className="flex 2xl:text-2xl md:flex-row flex-col">
                <SteperCrearLicitacion />
            </section>
        </LayoutUser>
    )
}
export const getStaticProps:GetStaticProps=async(context)=>{
    const data=context.previewData as {token:string};
    if(data){
        console.log("token ",data);
        return{
            props:{
                token:data.token
            },
            revalidate:120
        }
    }else{
        return{
            props:{},
            redirect:{
                destination:"/login"
            },
            revalidate:300
        }
    }
}