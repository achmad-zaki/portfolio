'use client'

import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface IButtonProps {
    type?: 'submit' | 'button'
    onClick?: () => void
    className?: string
    icon?: ReactNode
    children: ReactNode,
    size?: "sm" | "md" | "lg",
    variant?: "default" | "outline" | "success"
}

const Button: FC<IButtonProps> = ({
    children,
    type = 'button',
    className,
    icon,
    size = "md",
    variant = "default",
    onClick
}) => {

    const baseClases = "font-medium rounded-xl inline-flex items-center justify-center border transition-smooth"

    const buttonVariants = {
        default: "dark:bg-neutral-700 bg-neutral-800 text-neutral-50 dark:hover:bg-neutral-600 hover:bg-indigo-600 dark:border-neutral-500 border-neutral-200",
        success: "border border-emerald-500 bg-emerald-700/20",
        outline: "dark:border-neutral-700 border-neutral-400 dark:hover:border-neutral-500 hover:border-neutral-500 dark:text-neutral-50 text-neutral-800",
    }

    const buttonSize = {
        sm: "py-2.5 px-4 text-xs",
        md: "py-3 px-5 text-sm",
        lg: "py-4 px-6 text-lg",
    }

    return (
        <button
            onClick={onClick}
            className={twMerge(`${baseClases} ${buttonVariants[variant]} ${buttonSize[size]} ${className}`)}
            type={type}
        >
            {icon && (
                <span className="mr-2">
                    {icon}
                </span>
            )}
            {children}
        </button>
    )
}

export default Button