import MotionSection from "@/components/MotionSection"
import { CardProject } from "@/components/ui"
import { LIST_PROJECTS } from "@/constants/project"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects"
}

export default function ProjectsPage() {
    return (
        <div>
            <MotionSection>
                <h1 className="text-4xl text-text font-bold">Projects</h1>
                <p className="text-text-foreground mt-3">Explore cutting-edge design innovations that transform ideas into reality.</p>
            </MotionSection>

            <MotionSection delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                    {LIST_PROJECTS.map((project, index) => (
                        <MotionSection key={index} delay={index * 0.2}>
                            <CardProject
                                {...project}
                            />
                        </MotionSection>
                    ))}
                </div>
            </MotionSection>
        </div>
    )
}
