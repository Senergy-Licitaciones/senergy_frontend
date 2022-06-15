// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'
import { TypeToken } from '../data/enums'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      tipo:TypeToken,
      name:string,
      email:string,
      sub:string
    }
    accessToken:string
  }
  // eslint-disable-next-line no-unused-vars
  interface User {
    token:string,
      name:string,
      tipo:TypeToken,
      sub:string,
      email:string
  }

}
