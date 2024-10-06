'use client'

import Image, { StaticImageData } from "next/image"
import { FC, Fragment } from "react"
import { RiTailwindCssFill, RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { FaSass, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { FaArrowRightLong, FaGitlab } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

interface ICardProjectProps {
    title: string
    desc: string
    icons: any[],
    image: StaticImageData
}

const CardProject: FC<ICardProjectProps> = ({
    title,
    icons,
    desc,
    image
}) => {

    return (
        <div className="bg-card-foreground rounded-lg overflow-hidden shadow-md border dark:border-neutral-600 border-neutral-300">
            <div className="relative group overflow-hidden cursor-pointer">
                <Image loading="lazy" src={image} alt="Project" width={500} height={500} className="h-48 object-cover object-center w-full group-hover:scale-105 transition-smooth group-hover:blur-sm" />

                <div className="absolute z-10 bg-black/90 opacity-0 group-hover:opacity-100 size-full flex items-center justify-center top-0 transition-smooth">
                    <div className="flex items-center font-medium text-neutral-100 gap-3">
                        <span className="text-sm">View Project</span>
                        <FaArrowRightLong className="size-4" />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-semibold text-text">{title}</h3>
                <p className="text-sm mt-3 text-text-foreground">{desc}</p>
                <div className="mt-5 flex items-center gap-3">
                    {icons.map((icon, index) => (
                        <Fragment key={index}>
                            {icon.name === "tailwind" && <RiTailwindCssFill className="size-6 text-sky-500" />}
                            {icon.name === "react" && <RiReactjsFill className="size-6 text-blue-400" />}
                            {icon.name === "nextjs" && <RiNextjsFill className="size-6 dark:text-neutral-50 text-neutral-900" />}
                            {icon.name === "typescript" && <BiLogoTypescript className="size-6 text-blue-600" />}
                            {icon.name === 'javascript' && (<IoLogoJavascript className="size-5 text-yellow-500" />)}
                            {icon.name === 'css' && (<IoLogoCss3 className="size-5 text-blue-500" />)}
                            {icon.name === 'html' && (<IoLogoHtml5 className="size-5 text-orange-500" />)}
                            {icon.name === 'sass' && (<FaSass className="size-5 text-pink-500" />)}
                            {icon.name === 'figma' && (<IoLogoFigma className="size-5 text-pink-600" />)}
                            {icon.name === 'vercel' && (<IoLogoVercel className="size-5 dark:text-neutral-100 text-neutral-950" />)}
                            {icon.name === 'git' && (<FaGitAlt className="size-5 text-red-500" />)}
                            {icon.name === 'github' && (<FaGithub className="size-5 dark:text-neutral-100 text-neutral-950" />)}
                            {icon.name === 'gitlab' && (<FaGitlab className="size-5 text-orange-600" />)}
                            {icon.name === 'nodejs' && (<FaNodeJs className="size-5 text-green-500" />)}
                            {icon.name === 'express' && (<SiExpress className="size-5 dark:text-neutral-100 text-neutral-950" />)}
                            {icon.name === 'chakraui' && (<SiChakraui className="size-5 text-teal-500" />)}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardProject