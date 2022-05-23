import { Licitacion } from "../data"

export interface ErrorResponse extends Response{
    error:Object
}
export interface LoginResponse extends Response{
    token:string
}
export interface Response{
    message:string
}
export type ResponseMethodPost=ResponseRegisterUser|ResponseRegisterProveedor|ErrorResponse
export type ResponseMethodPut=Response|LoginResponse|ErrorResponse
export type ResponseMethodGet= Licitacion[]|ErrorResponse
export interface ResponseRegisterProveedor extends Response{
    correo:string
}
export interface ResponseRegisterUser extends Response{
    idUser:string
}