import { GetServerSideProps } from "next";
import SteperCrearLicitacion from "../../../components/common/SteperCrearLicitacion";
import LayoutUser from "../../../components/layout/layoutUser/LayoutUser";

export default function CrearLicitacion():JSX.Element{
    return(
        <LayoutUser>
            <section className="flex 2xl:text-2xl md:flex-row flex-col">
                <SteperCrearLicitacion />
            </section>
        </LayoutUser>
    )
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    const data=context.previewData as {token:string};
    if(data){
        console.log("token ",data);
        return{
            props:{
                token:data.token
            }
        }
    }else{
        return{
            props:{},
            redirect:{
                destination:"/login"
            }
        }
    }
}