'use client'

import Link from "next/link";
import Avatar from "./ui/avatar";
import { MENU_ITEMS } from "@/constants/menu";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { FaBars } from "react-icons/fa6";
import { SOCIAL_ITEMS } from "@/constants/social";
import DarkMode from "@/components/DarkMode";
import Search from "./Search";
import { useState } from "react";
import { motion } from "framer-motion"

export default function Navbar() {
    const pathname = usePathname()
    const [isShow, setIsShow] = useState(false)

    const handleButtonClick = () => {
        setIsShow(!isShow)
    }

    return (
        <header className="fixed z-50 top-0 w-full dark:bg-neutral-900 bg-neutral-100 border-b dark:border-b-neutral-700 border-b-neutral-300 md:hidden">
            <div className="p-5 flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar />
                    <span className="ml-3 font-semibold dark:text-neutral-300 text-neutral-700">Achmad Zaki</span>
                </div>
                <button onClick={handleButtonClick} className="hover:dark:bg-neutral-600 hover:bg-neutral-200 p-2 rounded-lg transition-smooth">
                    <FaBars className="size-6 text-muted-foreground" />
                </button>
            </div>
            {isShow && (
                <>
                    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.50 }} className="p-4 border-t dark:border-t-neutral-700 border-t-neutral-300">
                        <div className="flex flex-col gap-y-2">
                            {MENU_ITEMS.map((menu, index) => {
                                const activeClass = pathname === menu.href ? 'dark:bg-neutral-600 bg-neutral-200' : '';
                                const activeText = pathname === menu.href ? 'dark:text-neutral-100 text-neutral-700' : 'text-neutral-500';

                                return (
                                    <Link key={index} href={menu.href}>
                                        <div className={twMerge(`group flex items-center gap-3 hover:dark:bg-neutral-700 hover:bg-neutral-200 transition-smooth px-4 py-2 rounded-lg`, activeClass)}>
                                            <menu.icon className={twMerge(`size-5`, activeText)} />
                                            <div className={twMerge(`flex-grow text-neutral-500 text-sm group-hover:dark:text-neutral-100 group-hover:text-neutral-700 font-medium transition-smooth capitalize`, activeText)}>
                                                {menu.name}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="space-y-2 mt-3 pt-5 border-t dark:border-t-neutral-800 border-t-neutral-300">
                            <div className="px-3 text-xs text dark:text-neutral-500 text-neutral-600">Social</div>
                            <div className="flex flex-col gap-y-2">
                                {SOCIAL_ITEMS.map((social, index) => (
                                    <Link target="_blank" key={index} href={social.href}>
                                        <div className="group flex items-center gap-3 hover:dark:bg-neutral-700 hover:bg-neutral-200 transition-smooth px-4 py-2 rounded-lg">
                                            <social.icon className={`size-5 text-neutral-500 ${social.color}`} />
                                            <div className="flex-grow text-neutral-500 text-sm group-hover:dark:text-neutral-100 group-hover:text-neutral-700 font-medium transition-smooth capitalize">
                                                {social.name}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2 mt-3 pt-5 border-t dark:border-t-neutral-800 border-t-neutral-300">
                            <div className="flex items-center gap-x-3 px-3">
                                <DarkMode />
                                <Search />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </header>
    )
}
