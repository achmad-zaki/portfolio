"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mounted, setMoundted] = useState(false)

    useEffect(() => {
        setMoundted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
}