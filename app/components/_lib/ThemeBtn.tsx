'use client'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeBtn() {
    const {theme, setTheme} = useTheme()

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <button 
        aria-label="toggle Dark mode"
        type="button"
        className="pr-4"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>

            { theme === 'dark' ?
                <SunIcon className="w-5 h-5" />
                :
                <MoonIcon className="w-5 h-5" />
            }
        </button>

    )
}