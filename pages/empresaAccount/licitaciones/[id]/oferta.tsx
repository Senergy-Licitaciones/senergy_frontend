import { GetServerSideProps } from "next";
import FormCrearOferta from "../../../../components/common/FormCrearOferta";
import LayoutProveedor from "../../../../components/layout/layoutProveedor";
import { verifyToken } from "../../../../utils/handleJwt";
type Props={
    id:string,
    token:string
}
export default function LicitacionOferta({id,token}:Props){
  
    return(
        <LayoutProveedor>
            <section>
            <h1>Realizar oferta para Licitación {id} </h1>
            <FormCrearOferta idLicitacion={id} />
            </section>
        </LayoutProveedor>
    )
}
export const getServerSideProps:GetServerSideProps=async(context)=>{
    const {params}=context,
    data=context.previewData as undefined|{token?:string};
    if(!data)return{
        props:{},
        redirect:{
            destination:"/login/empresa"
        }
    };
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
            id:params.id,
            token:data.token
        }
    }
}