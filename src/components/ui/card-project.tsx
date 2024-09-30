import { ASSETS } from "@/assets"
import Image from "next/image"
import { FC } from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

interface ICardProjectProps {

}

const CardProject: FC<ICardProjectProps> = () => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md border dark:border-neutral-600 border-neutral-300">
            <div className="relative group overflow-hidden cursor-pointer">
                <Image loading="lazy" src={ASSETS.Project} alt="Project" width={500} height={500} className="h-48 object-cover object-center w-full group-hover:scale-105 transition-smooth" />

                <div className="absolute z-10 bg-black/90 opacity-0 group-hover:opacity-100 size-full flex items-center justify-center top-0 transition-smooth">
                    <div className="flex items-center font-medium text-neutral-100 gap-3">
                        <span className="text-sm">View Project</span>
                        <FaArrowRightLong className="size-4" />
                    </div>
                </div>
            </div>
            <div className="bg-card-foreground p-5">
                <h3 className="font-semibold text-foreground">Personal Website</h3>
                <p className="text-sm mt-3 text-text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem temporibus aliquid, nesciunt eos amet?</p>
                <div className="mt-5 flex items-center gap-3">
                    <RiNextjsFill className="size-6" />
                    <RiReactjsFill className="size-6" />
                    <RiTailwindCssFill className="size-6" />
                    <BiLogoTypescript className="size-6" />
                </div>
            </div>
        </div>
    )
}

export default CardProject