"use client"

import Link from "next/link"
import Avatar from "./Avatar"
import { MENU_ITEMS } from "@/constants/menu"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { SOCIAL_ITEMS } from "@/constants/social"
import DarkMode from "./DarkMode"
import Search from "./Search"

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="fixed z-50 left-0 top-0 h-screen hidden md:block px-4 py-5 w-20 lg:w-72">
            <div className="flex flex-col justify-between gap-y-5 h-full">
                <div className="flex items-center">
                    <Avatar />
                    <div className="hidden lg:block ml-3">
                        <h5 className="dark:text-neutral-100 font-semibold">Achmad Zaki</h5>
                        <p className="text-sm dark:text-neutral-400">Frontend Developer</p>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-y-5 flex-1">
                    <div className="w-full flex flex-col gap-y-1">
                        {MENU_ITEMS.map((menu, index) => {
                            const activeClass = pathname === menu.href ? 'dark:bg-neutral-700 bg-neutral-200 border border-neutral-600' : ''
                            const activeText = pathname === menu.href ? 'dark:text-neutral-100 text-neutral-700' : 'dark:text-neutral-400 text-neutral-500'

                            return (
                                <Link key={index} href={menu.href}>
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

                    <div className="w-full flex flex-col items-center lg:items-start gap-y-2">
                        <span className="text-xs lg:px-3 dark:text-neutral-300 text-neutral-500">Social</span>
                        <div className="w-full">
                            {SOCIAL_ITEMS.map((social, index) => (
                                <Link target="_blank" key={index} href={social.href}>
                                    <div
                                        className="relative group dark:hover:bg-neutral-800 border border-transparent dark:hover:border-neutral-600 transition-smooth h-12 lg:h-10 flex lg:flex-row items-center justify-center lg:justify-start rounded-xl lg:px-3"
                                    >
                                        <social.icon className={`size-5 ${social.color} dark:text-neutral-600 transition-smooth`} />
                                        <div className="hidden lg:block ml-3 text-sm capitalize">
                                            {social.name}
                                        </div>

                                        <span className="absolute lg:hidden z-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 dark:bg-neutral-950 text-white text-xs rounded-lg py-1 px-2 left-full ml-2 pointer-events-none capitalize border border-neutral-700">
                                            {social.name}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
                    <DarkMode />
                    <Search />
                </div>
            </div>

        </aside >
    )
}

export default Sidebar