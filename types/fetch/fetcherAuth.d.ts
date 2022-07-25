export type FetcherAuth<Response> = (token:string)=>Promise<Response>
