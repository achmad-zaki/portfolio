"use client"

import Link from "next/link"
import Avatar from "./Avatar"
import { MENU_ITEMS } from "@/constants/menu"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { SOCIAL_ITEMS } from "@/constants/social"

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="fixed z-50 left-0 top-0 h-screen hidden md:block px-4 py-5 w-20 lg:w-72">
            <div className="flex flex-col gap-y-5">
                <div className="flex items-center">
                    <Avatar />
                    <div className="hidden lg:block ml-3">
                        <h5 className="dark:text-neutral-100 font-semibold">Achmad Zaki</h5>
                        <p className="text-sm dark:text-neutral-400">Frontend Developer</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-y-1">
                    {MENU_ITEMS.map((menu, index) => {
                        const activeClass = pathname === menu.href ? 'dark:bg-neutral-700 bg-neutral-200 border border-neutral-600' : ''
                        const activeText = pathname === menu.href ? 'dark:text-neutral-100 text-neutral-700' : 'dark:text-neutral-400 text-neutral-500'

                        return (
                            <Link key={index} href={menu.href} className="w-full">
                                <div
                                    className={twMerge(`relative group dark:hover:bg-neutral-800 border border-transparent dark:hover:border-neutral-600 transition-smooth h-12 lg:h-10 flex lg:flex-row items-center justify-center lg:justify-start rounded-xl lg:px-3`, activeClass)}
                                >
                                    <menu.icon className={`size-5 ${pathname === menu.href ? 'dark:text-neutral-100' : 'dark:text-neutral-600'} transition-smooth`} />
                                    <div className={`hidden ${pathname === menu.href ? 'dark:text-neutral-100' : 'dark:text-neutral-400'} group-hover:dark:text-neutral-100 lg:block ml-3 font-medium text-sm capitalize transition-smooth`}>
                                        {menu.name}
                                    </div>

                                    {/* tootip */}
                                    <span className="absolute lg:hidden z-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 dark:bg-neutral-950 text-white text-xs rounded-lg py-1 px-2 left-full ml-2 pointer-events-none capitalize border border-neutral-700">
                                        {menu.name}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className="flex flex-col items-center gap-y-1">
                    {SOCIAL_ITEMS.map((social, index) => (
                        <Link target="_blank" key={index} href={social.href} className="w-full">
                            <div
                                className="relative group dark:hover:bg-neutral-800 border border-transparent dark:hover:border-neutral-600 transition-smooth h-12 lg:h-10 flex lg:flex-row items-center justify-center lg:justify-start rounded-xl lg:px-3"
                            >
                                <social.icon className={`size-5 ${social.color} dark:text-neutral-600 transition-smooth`} />
                                <div className="hidden lg:block ml-3 text-sm capitalize">
                                    {social.name}
                                </div>

                                {/* tootip */}
                                <span className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-lg py-1 px-2 left-full ml-2 pointer-events-none">
                                    {social.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside >
    )
}

export default Sidebar