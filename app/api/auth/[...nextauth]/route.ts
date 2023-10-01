import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
              password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                
                const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/login`, credentials)
          
                //return the user to next-auth session
                if (res.status === 200) {

                  return res.data
                } else {
                  // If you return null then an error will be displayed advising the user to check their details.
                  return null
                }
            }
          })
    ],
    pages: {
      signIn: "/user/login",
      error: "/user/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30
    },
    callbacks: {
      async jwt({ token, user }) {
        //combine user and token into a single object
        return {...token, ...user}
      },
      async session({ session, token }) {
        session.user = token as any
        return session
      }
    }
})


export { handler as GET, handler as POST }