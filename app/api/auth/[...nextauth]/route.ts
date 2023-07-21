import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
              password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                const res = await fetch(`api/login`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    email: credentials?.email,
                    password: credentials?.password,
                  })
                })
                const user = await res.json()
          
                //return the user to next-auth session
                if (res.status === 200) {

                  return user
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