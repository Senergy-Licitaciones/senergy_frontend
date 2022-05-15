import type {NextApiRequest,NextApiResponse} from "next"
export default (req:NextApiRequest,res:NextApiResponse)=>{
    try{
        const {token}:{token:string}=req.body;
        console.log("token api ",token);
        res.setPreviewData({
            token
        },{
            maxAge:3600
        });
        return res.status(200).send({
            message:"token guardado exitosamente"
        })
    }catch(err){
        console.log("error api ",err);
        res.send({
            message:"Ha ocurrido un error",
            error:err
        })
    }
}