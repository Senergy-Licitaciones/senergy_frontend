import type {NextApiRequest,NextApiResponse} from "next";
export default async(_req:NextApiRequest,res:NextApiResponse)=>{
    res.clearPreviewData();
    return res.status(200).send({
        message:"Token borrado exitosamente"
    })
}