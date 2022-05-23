import { GetServerSideProps } from "next";
import LayoutProveedor from "../../components/layout/layoutProveedor";
import { verifyToken } from "../../utils/handleJwt";

export default function HomeProveedor(token:string):JSX.Element{
    return(
        <LayoutProveedor>
            <section>
                <h1 className="text-center dark:text-gray-400 text-2xl" >Bienvenido al panel de proveedores</h1>
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps:GetServerSideProps=async(ctx)=>{
    const data=ctx.previewData as undefined|{token?:string};
    if(!data)return{
        props:{},
        redirect:{
            destination:"/login/empresa"
        }
    }
    console.log("antes del verify ",data);
    const result=await verifyToken(data.token);
    if(!result)return{
        props:{},
        redirect:{
            destination:"/login/empresa"
        }
    };
    if(result.type!=="proveedor")return{
        props:{},
        redirect:{
            destination:"/userAccount"
        }
    }
    return{
        props:{
            token:data.token
        }
    }
    
}