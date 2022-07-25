import { Role, TypeToken } from './enums'

export interface TokenData{
    _id:string
}
export interface TokenUser extends TokenData{
    type:TypeToken.User,
    empresa:string
    role:Role
}
export interface TokenProveedor extends TokenData{
    type:TypeToken.Proveedor,
    razSocial:string
}
