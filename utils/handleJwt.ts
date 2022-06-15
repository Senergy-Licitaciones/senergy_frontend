import { TokenProveedor, TokenUser } from '../types/data'
import jwt, { Secret } from 'jsonwebtoken'
export const decode = (token:string):TokenUser|TokenProveedor|null => {
  return jwt.decode(token) as TokenUser|TokenProveedor|null
}
export const verifyToken = (token:string):TokenUser|TokenProveedor|null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as Secret) as TokenProveedor|TokenUser
  } catch (err) {
    console.log('error jwt ', err)
    return null
  }
}
