'use client'

import Link from "next/link";
import Avatar from "./Avatar";
import { MENU_ITEMS } from "@/constants/menu";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FaBars } from "react-icons/fa6";
import { SOCIAL_ITEMS } from "@/constants/social";

export default function Navbar() {
    const pathname = usePathname()

    const handleButtonClick = () => {
        console.log("click")
    }

    return (
        <header className="fixed top-0 w-full dark:bg-neutral-900 bg-neutral-100 border-b dark:border-b-neutral-700 border-b-neutral-300">
            <div className="p-5 flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center">
                        <Avatar />
                        <span className="ml-3 font-semibold dark:text-neutral-300 text-neutral-700">Achmad Zaki</span>
                    </div>
                </Link>
                <button onClick={handleButtonClick} className="hover:dark:bg-neutral-600 hover:bg-neutral-200 p-2 rounded-lg transition-colors duration-300">
                    <FaBars className="size-6 text-muted-foreground" />
                </button>
            </div>
            <div className="p-4 border-t dark:border-t-neutral-700 border-t-neutral-300">
                <div className="flex flex-col gap-y-2">
                    {MENU_ITEMS.map((menu, index) => {
                        const activeClass = pathname === menu.href ? 'dark:bg-neutral-600 bg-neutral-200' : '';
                        const activeText = pathname === menu.href ? 'dark:text-neutral-100 text-neutral-700' : '';

                        return (
                            <Link key={index} href={menu.href}>
                                <div className={twMerge(`group flex items-center gap-3 hover:dark:bg-neutral-700 hover:bg-neutral-200 transition-colors duration-300 px-4 py-2 rounded-lg`, activeClass)}>
                                    <menu.icon className={twMerge(`size-5 text-text`, activeText)} />
                                    <div className={twMerge(`flex-grow text-text text-sm group-hover:dark:text-neutral-100 group-hover:text-neutral-700 font-medium transition-colors duration-300 capitalize`, activeText)}>
                                        {menu.name}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="space-y-2 mt-3 pt-5 border-t dark:border-t-neutral-800 border-t-neutral-300">
                    <div className="px-3 text-sm text dark:text-neutral-400 text-neutral-600">Social</div>
                    <div className="flex flex-col gap-y-2">
                        {SOCIAL_ITEMS.map((social, index) => (
                            <Link target="_blank" key={index} href={social.href}>
                                <div className="group flex items-center gap-3 hover:dark:bg-neutral-700 hover:bg-neutral-200 transition-colors duration-300 px-4 py-2 rounded-lg">
                                    <social.icon className="size-5 text-text" />
                                    <div className="flex-grow text-text text-sm group-hover:dark:text-neutral-100 group-hover:text-neutral-700 font-medium transition-colors duration-300 capitalize">
                                        {social.name}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}
