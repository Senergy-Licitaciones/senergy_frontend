import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginUser } from '../../../services/auth'
import { loginProveedor } from '../../../services/auth/loginProveedor.service'
import { TokenProveedor, TokenUser } from '@mytypes/models'
import { TypeToken } from '@mytypes/models/enums'
import { decode } from '../../../utils/handleJwt.utility'
export const configNextAuth:NextAuthOptions = {
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
            const data = await loginUser({ correo, password })
            const { _id, empresa, type } = decode(data.accessToken) as TokenUser
            return {
              email: correo,
              sub: _id,
              name: empresa,
              tipo: type,
              token: data.accessToken
            }
          }
          if (tipo === TypeToken.Proveedor) {
            const data = await loginProveedor({ correo, password })
            const { _id, type, razSocial } = decode(data.accessToken) as TokenProveedor

            return {
              email: correo,
              sub: _id,
              tipo: type,
              name: razSocial,
              token: data.accessToken
            }
          }
          throw new Error('No se proporcionó el tipo de usuario')
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
  session: {
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
  },
  pages: {
    signIn: '/login'
  }

}
export default NextAuth(configNextAuth)
