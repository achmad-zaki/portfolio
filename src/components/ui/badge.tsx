'use client'

import { FC } from "react"
import { RiTailwindCssFill, RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { FaSass, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { motion } from "framer-motion"

interface IBadgeProps {
  name: string
  icon: string
}

const Badge: FC<IBadgeProps> = ({
  name,
  icon
}) => {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className="shadow-sm text-text text-sm border whitespace-nowrap font-medium flex items-center gap-2 dark:bg-neutral-800 bg-neutral-100 dark:border-neutral-700 border-neutral-300 rounded-full px-4 py-2 opacity-30">
      {icon === 'nextjs' && (<RiNextjsFill className="size-5 dark:text-neutral-50 text-neutral-900" />)}
      {icon === 'react' && (<RiReactjsFill className="size-5 text-blue-500" />)}
      {icon === 'tailwind' && (<RiTailwindCssFill className="size-5 text-sky-500" />)}
      {icon === 'typescript' && (<BiLogoTypescript className="size-5 text-blue-600" />)}
      {icon === 'javascript' && (<IoLogoJavascript className="size-5 text-yellow-500" />)}
      {icon === 'css' && (<IoLogoCss3 className="size-5 text-blue-500" />)}
      {icon === 'html' && (<IoLogoHtml5 className="size-5 text-orange-500" />)}
      {icon === 'sass' && (<FaSass className="size-5 text-pink-500" />)}
      {icon === 'figma' && (<IoLogoFigma className="size-5 text-pink-600" />)}
      {icon === 'vercel' && (<IoLogoVercel className="size-5 dark:text-neutral-100 text-neutral-950" />)}
      {icon === 'git' && (<FaGitAlt className="size-5 text-red-500" />)}
      {icon === 'github' && (<FaGithub className="size-5 dark:text-neutral-100 text-neutral-950" />)}
      {icon === 'gitlab' && (<FaGitlab className="size-5 text-orange-600" />)}
      {icon === 'nodejs' && (<FaNodeJs className="size-5 text-green-500" />)}
      {icon === 'express' && (<SiExpress className="size-5 dark:text-neutral-100 text-neutral-950" />)}
      {icon === 'chakraui' && (<SiChakraui className="size-5 text-teal-500" />)}
      {name}
    </motion.div>
  )
}

export default Badge