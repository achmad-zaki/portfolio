"use client"

import { RiMoonFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { Fragment } from "react";
import { AiFillSun } from "react-icons/ai";

const DarkMode = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Fragment>
            {theme === 'dark' ? (
                <button onClick={() => setTheme('light')} className="dark:hover:bg-neutral-800 hover:bg-neutral-200 p-2 rounded-full transition-smooth hover:rotate-12">
                    <RiMoonFill className="size-6 text-amber-500" />
                </button>
            ) : (
                <button onClick={() => setTheme('dark')} className="dark:hover:bg-neutral-800 hover:bg-neutral-200 p-2 rounded-full transition-smooth hover:rotate-12">
                    <AiFillSun className="size-6 text-amber-500" />
                </button>
            )}
        </Fragment>
    )
}

export default DarkMode
