import type { NextApiRequest, NextApiResponse } from 'next'
const login = async (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const { token }:{token:string} = req.body
    res.setPreviewData({
      token
    }, {
      maxAge: 3600
    })
    return res.status(200).send({
      message: 'token guardado exitosamente'
    })
  } catch (err) {
    console.log('error api ', err)
    res.status(500).send({
      message: 'Ha ocurrido un error',
      error: err
    })
  }
}
export default login
