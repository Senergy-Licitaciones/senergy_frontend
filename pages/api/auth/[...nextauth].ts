import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { TokenProveedor, TokenUser } from '../../../types/data'
import { TypeToken } from '../../../types/data/enums'
import { ErrorResponse, LoginResponse } from '../../../types/methods'
import { methodPut } from '../../../utils/fetch'
import { decode } from '../../../utils/handleJwt'
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      type: 'credentials',
      credentials: {
        correo: {
          type: 'email'
        },
        password: {
          type: 'password'
        },
        tipo: {
          type: 'text'
        }
      },
      async authorize (credentials) {
        try {
          if (credentials == null) throw new Error('No se proporcionó las credenciales')
          const { correo, password, tipo } = credentials
          if (tipo === TypeToken.User) {
            const data = await methodPut('auth/loginUsuario', { correo, password }) as LoginResponse|ErrorResponse
            if ('error' in data) throw new Error(data.message)
            const { _id, empresa, type } = decode(data.token) as TokenUser
            return {
              email: correo,
              sub: _id,
              name: empresa,
              tipo: type,
              token: data.token
            }
          }
          if (tipo === TypeToken.Proveedor) {
            const data = await methodPut('auth/loginProveedor', { correo, password }) as LoginResponse|ErrorResponse
            if ('error' in data) throw new Error(data.message)
            const { _id, type, razSocial } = decode(data.token) as TokenProveedor

            return {
              email: correo,
              sub: _id,
              tipo: type,
              name: razSocial,
              token: data.token
            }
          }
          return null
        } catch (err) {
          console.log('error ', err)
          return null
        }
      }
    })
  ],
  jwt: {
    maxAge: 60 * 60
  },
  callbacks: {
    async jwt ({ user, token, account }) {
      try {
        if (account && user) {
          return {
            ...token,
            tipo: user.tipo,
            email: user.email,
            name: user.name,
            sub: user.sub,
            accessToken: user.token
          }
        }
        return token
      } catch (err) {
        console.log('error ', err)
        return token
      }
    },
    async session ({ session, token }) {
      try {
        const payload = token as {email:string, name:string, sub:string, accessToken:string, tipo:TypeToken}
        session.accessToken = payload.accessToken
        session.user = {
          ...session.user,
          email: payload.email,
          name: payload.name,
          sub: payload.sub,
          tipo: payload.tipo
        }
        return session
      } catch (err) {
        console.log('error ', err)
        return session
      }
    }
  }

})
