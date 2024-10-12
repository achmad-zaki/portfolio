import { ASSETS } from "@/assets";
import MotionSection from "@/components/MotionSection";
import { LIST_EXPERIENCES } from "@/constants/experience";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="space-y-10">
            <MotionSection>
                <h1 className="text-text font-semibold text-3xl">Achmad Zaki Fathurohman</h1>
                <h3 className="text-text-foreground font-semibold text-3xl mt-2">Frontend Developer</h3>
                <p className="text-text-foreground mt-6 leading-relaxed text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus asperiores eligendi totam harum quos placeat ab, dolorum, voluptatibus voluptates praesentium facilis autem architecto tempore animi.</p>
            </MotionSection>

            <MotionSection delay={0.3}>
                <h1 className="text-xl font-semibold text-text">Experience</h1>
                <div className="mt-6 space-y-10">
                    {LIST_EXPERIENCES.map((experience, index) => (
                        <MotionSection key={index} delay={index * 0.3}>
                            <div className="flex items-start">
                                <Image src={experience.image} alt="Logo" width={55} height={55} className="bg-white flex items-center justify-center size-14 rounded-md border border-text-text shadow-sm" />
                                <div className="ml-5">
                                    <h5 className="text-text font-semibold">{experience.name_position}</h5>
                                    <div className="mt-1 flex flex-col">
                                        <span className="text-text-foreground text-sm">{experience.name_company}</span>
                                        <span className="text-text-foreground text-sm">{experience.date}</span>
                                    </div>
                                    <p className="text-text mt-2 font-medium">{experience.desc}</p>
                                </div>
                            </div>
                        </MotionSection>
                    ))}
                </div>
            </MotionSection>
        </div >
    )
}
