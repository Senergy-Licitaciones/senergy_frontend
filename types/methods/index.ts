
export interface ErrorResponse extends Response{
    error:Object
}
export interface LoginUserResponse extends Response{
    token:string
}
export interface Response{
    message:string
}
export type ResponseMethodPost=ResponseRegisterUser|ErrorResponse
export type ResponseMethodPut=Response|LoginUserResponse|ErrorResponse
export interface ResponseRegisterUser extends Response{
    idUser:string
}