export type FetcherBodyAuth<Body, Response> =(form:Body, token:string)=>Promise<Response>
