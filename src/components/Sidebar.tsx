"use client"

import Link from "next/link"
import Avatar from "./ui/avatar"
import { MENU_ITEMS } from "@/constants/menu"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { SOCIAL_ITEMS } from "@/constants/social"
import DarkMode from "./DarkMode"
import Search from "./Search"
import Tooltip from "./ui/tooltip"

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="fixed z-50 left-0 top-0 h-screen hidden md:block px-4 py-5 w-20 lg:w-72">
            <div className="flex flex-col justify-between gap-y-5 h-full">
                <div className="flex items-center">
                    <Avatar />
                    <div className="hidden lg:block ml-3">
                        <h5 className="text-text font-semibold">Achmad Zaki</h5>
                        <p className="text-sm text-neutral-500">Frontend Developer</p>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-y-5 flex-1">
                    <div className="w-full flex flex-col gap-y-1">
                        {MENU_ITEMS.map((menu, index) => {
                            const activeClass = pathname === menu.href ? 'dark:bg-neutral-700 bg-neutral-300 border dark:border-neutral-600 border-neutral-300' : ''
                            const activeText = pathname === menu.href ? 'dark:text-neutral-100 text-neutral-800' : 'dark:text-neutral-400 text-neutral-500'

                            return (
                                <Link key={index} href={menu.href}>
                                    <div
                                        className={twMerge(`relative group dark:hover:bg-neutral-800 hover:bg-neutral-200 border border-transparent dark:hover:border-neutral-600 transition-smooth h-12 lg:h-10 flex lg:flex-row items-center justify-center lg:justify-start rounded-xl lg:px-3`, activeClass)}
                                    >
                                        <menu.icon className={`size-5 ${pathname === menu.href ? 'dark:text-neutral-100 text-neutral-900 dark:group-hover:text-neutral-100 lg:group-hover:text-neutral-800' : 'dark:text-neutral-600 text-neutral-500 dark:group-hover:text-neutral-300 lg:dark:group-hover:text-neutral-600 lg:group-hover:text-neutral-500 group-hover:text-neutral-800'} transition-smooth`} />

                                        <div className={`hidden ${activeText} group-hover:dark:text-neutral-100 group-hover:text-neutral-700 lg:block ml-3 font-medium text-sm capitalize transition-smooth`}>
                                            {menu.name}
                                        </div>

                                        <Tooltip text={menu.name} />
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
                                        className="relative group dark:text-neutral-400 text-neutral-500 dark:hover:bg-neutral-800 hover:bg-neutral-200 border border-transparent dark:hover:border-neutral-600 transition-smooth h-12 lg:h-10 flex lg:flex-row items-center justify-center lg:justify-start rounded-xl lg:px-3"
                                    >
                                        <social.icon className={`size-5 ${social.color} dark:text-neutral-600 text-neutral-500 transition-smooth`} />
                                        <div className="hidden lg:block ml-3 text-sm capitalize">
                                            {social.name}
                                        </div>

                                        <Tooltip text={social.name} />
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