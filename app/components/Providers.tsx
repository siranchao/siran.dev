'use client'
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/app/store"


export default function Providers({children}: {children: React.ReactNode}) {

    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}
