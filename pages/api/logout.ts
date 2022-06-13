import type {NextApiRequest,NextApiResponse} from "next";
const logout= async(_req:NextApiRequest,res:NextApiResponse)=>{
    res.clearPreviewData();
    return res.status(200).send({
        message:"Token borrado exitosamente"
    })
}
export default logout;