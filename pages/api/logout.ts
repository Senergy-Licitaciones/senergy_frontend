import type {NextApiRequest,NextApiResponse} from "next";
export default async(req:NextApiRequest,res:NextApiResponse)=>{
    res.clearPreviewData();
    return res.status(200).send({
        message:"Token borrado exitosamente"
    })
}