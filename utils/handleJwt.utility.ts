import { TokenProveedor, TokenUser } from '@mytypes/models'
import jwt from 'jsonwebtoken'
export const decode = (token:string):TokenUser|TokenProveedor|null => {
  return jwt.decode(token) as TokenUser|TokenProveedor|null
}
