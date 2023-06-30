'use client'
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
//import { useState, useEffect } from "react"

export default function Providers({children}: {children: React.ReactNode}) {
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => setMounted(true), []);

    // if (!mounted) {
    //     return <>{children}</>;
    // }

    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}
