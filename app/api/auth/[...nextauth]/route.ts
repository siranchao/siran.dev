import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

              const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: credentials?.email,
                  password: credentials?.password
                })
              })

              const user = await res.json()
        
              //return the user to next-auth session
              if (user) {
                console.log(user)
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          })
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 30
    },
    callbacks: {
      // async jwt({ token, user }) {
      //   token.isAdmin = user?.isAdmin
      //   return token;
      // },
      // async session({ session, token, user }) {
      //   session.user = user
      //   return session
      // }
    }
    
})



export { handler as GET, handler as POST }